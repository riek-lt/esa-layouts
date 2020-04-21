import type { Configschema } from 'configschema';
import { EventEmitter } from 'events';
import ObsWebsocketJs from 'obs-websocket-js';
import { findBestMatch } from 'string-similarity';
import { get as nodecg } from './nodecg';

const config = (nodecg().bundleConfig as Configschema).obs;

interface OBS {
  once(event: 'streamingStateChanged', listener: (streaming: boolean) => void): this;
  once(event: 'connectionStateChanged', listener: (connected: boolean) => void): this;
  once(event: 'currentSceneChanged', listener: (current?: string, last?: string) => void): this;
  once(event: 'sceneListChanged', listener: (list: string[]) => void): this;

  on(event: 'streamingStateChanged', listener: (streaming: boolean) => void): this;
  on(event: 'connectionStateChanged', listener: (connected: boolean) => void): this;
  on(event: 'currentSceneChanged', listener: (current?: string, last?: string) => void): this;
  on(event: 'sceneListChanged', listener: (list: string[]) => void): this;
}

class OBS extends EventEmitter {
  conn = new ObsWebsocketJs();
  currentScene: string | undefined;
  sceneList: string [] = [];
  connected = false;
  streaming = false;
  settings = {
    address: config.address,
    password: config.password,
  };

  constructor() {
    super();
    if (config.enable) {
      nodecg().log.info('[OBS] Setting up connection');
      this.connect();

      this.conn.on('ConnectionClosed', () => {
        this.connected = false;
        this.emit('connectionStateChanged', this.connected);
        nodecg().log.warn('[OBS] Connection lost, retrying in 5 seconds');
        setTimeout(() => this.connect(), 5000);
      });

      this.conn.on('SwitchScenes', (data) => {
        const lastScene = this.currentScene;
        this.currentScene = data['scene-name'];
        this.emit('currentSceneChanged', this.currentScene, lastScene);
      });

      this.conn.on('ScenesChanged', async () => {
        const scenes = await this.conn.send('GetSceneList');
        this.sceneList = scenes.scenes.map((s) => s.name);
        this.emit('sceneListChanged', this.sceneList);
      });

      this.conn.on('StreamStarted', () => {
        this.streaming = true;
        this.emit('streamingStateChanged', this.streaming);
      });

      this.conn.on('StreamStopped', () => {
        this.streaming = false;
        this.emit('streamingStateChanged', this.streaming);
      });

      // @ts-ignore: Pretty sure this emits an error.
      this.conn.on('error', (err) => {
        nodecg().log.warn('[OBS] Connection error');
        nodecg().log.debug('[OBS] Connection error:', err);
      });
    }
  }

  async connect(): Promise<void> {
    try {
      await this.conn.connect(this.settings);
      this.connected = true;
      this.emit('connectionStateChanged', this.connected);
      await this.conn.send('SetHeartbeat', { enable: true });
      const scenes = await this.conn.send('GetSceneList');

      // Get current scene on connection.
      const lastScene = this.currentScene;
      if (this.currentScene !== scenes['current-scene']) {
        this.currentScene = scenes['current-scene'];
        this.emit('currentSceneChanged', this.currentScene, lastScene);
      }

      // Get scene list on connection.
      const list = scenes.scenes.map((s) => s.name);
      if (JSON.stringify(list) !== JSON.stringify(this.sceneList)) {
        this.sceneList = list;
        this.emit('sceneListChanged', this.sceneList);
      }

      // Get streaming status on connection.
      const streamingStatus = await this.conn.send('GetStreamingStatus');
      if (streamingStatus.streaming !== this.streaming) {
        this.streaming = streamingStatus.streaming;
        this.emit('streamingStateChanged', this.streaming);
      }

      nodecg().log.info('[OBS] Connection successful');
    } catch (err) {
      this.conn.disconnect();
      nodecg().log.warn('[OBS] Connection error');
      nodecg().log.debug('[OBS] Connection error:', err);
    }
  }

  /**
   * Find scene based on string; at least the start of the name should be supplied.
   * @param name Name of scene, at least starting of name.
   */
  findScene(name: string): string | undefined {
    let match: string | undefined;
    const matches = this.sceneList.filter((s) => s.startsWith(name));
    if (matches.length > 1) {
      const bestMatches = findBestMatch(name, matches);
      match = bestMatches.bestMatch.target;
    } else if (matches.length === 1) {
      [match] = matches;
    }
    return match;
  }

  /**
   * Check if we are on a specified scene; at least the start of the name should be supplied.
   * @param name Name of scene to check we are on, at least starting of name.
   */
  isCurrentScene(name: string): boolean {
    return !!this.currentScene && this.currentScene === this.findScene(name);
  }

  /**
   * Change to the OBS scene with the closest matched name.
   * @param name Name of the scene.
   */
  async changeScene(name: string): Promise<void> {
    if (!config.enable || !this.connected) {
      // OBS not enabled, don't even try to set.
      throw new Error('No OBS connection available');
    }
    try {
      const scene = this.findScene(name);
      if (scene) {
        await this.conn.send('SetCurrentScene', { 'scene-name': scene });
      } else {
        throw new Error('Scene could not be found');
      }
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot change scene [${name}]`);
      nodecg().log.debug(`[OBS] Cannot change scene [${name}]: ${err.error || err}`);
      throw err;
    }
  }

  /**
   * Get named source's current settings.
   * @param sourceName Name of the source.
   */
  async getSourceSettings(sourceName: string): Promise<{
    messageId: string;
    status: 'ok';
    sourceName: string;
    sourceType: string;
    sourceSettings: {};
  }> {
    if (!config.enable || !this.connected) {
      // OBS not enabled, don't even try to set.
      throw new Error('No connection available');
    }
    try {
      return await this.conn.send('GetSourceSettings', { sourceName });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot get source settings [${sourceName}]`);
      nodecg().log.debug(`[OBS] Cannot get source settings [${sourceName}]: ${err.error || err}`);
      throw err;
    }
  }

  /**
   * Modify a sources settings.
   * @param sourceName Name of the source.
   * @param sourceType Source type (has the be the internal name, not the display name).
   * @param sourceSettings Settings you wish to pass to OBS to change.
   */
  // eslint-disable-next-line max-len
  async setSourceSettings(sourceName: string, sourceType: string, sourceSettings: {}): Promise<void> {
    if (!config.enable || !this.connected) {
      // OBS not enabled, don't even try to set.
      throw new Error('No connection available');
    }
    try {
      await this.conn.send('SetSourceSettings', {
        sourceName,
        sourceType,
        sourceSettings,
      });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot set source settings [${sourceName}]`);
      nodecg().log.debug(`[OBS] Cannot set source settings [${sourceName}]: ${err.error || err}`);
      throw err;
    }
  }

  /**
   * Helper function used by layouts.ts.
   * Resets the scene item, then sets some properties if possible.
   * @param scene Name of scene that item is in
   * @param item Name of item
   * @param area Area object (as used in capturePositions): x, y, width, height
   * @param crop Crop object: top, bottom, left, right
   * @param visible If the source should be visible or not
   */
  async configureSceneItem(
    scene: string,
    item: string,
    area?: {
      x: number;
      y: number;
      width: number;
      height: number;
    },
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    },
    visible?: boolean,
  ): Promise<void> {
    try {
      if (!config.enable || !this.connected) {
        // OBS not enabled, don't even try to set.
        throw new Error('No connection available');
      }
      if (area) {
        await this.conn.send('ResetSceneItem', {
          'scene-name': scene,
          item,
        });
      }
      // @ts-ignore: Typings say we need to specify more than we actually do.
      await this.conn.send('SetSceneItemProperties', {
        'scene-name': scene,
        item,
        visible: typeof visible !== 'undefined' ? visible : true,
        position: (area) ? {
          x: area.x,
          y: area.y,
        } : {},
        bounds: (area) ? {
          type: 'OBS_BOUNDS_STRETCH',
          x: area.width,
          y: area.height,
        } : {},
        crop: crop || {},
      });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot configure scene item [${scene}: ${item}]`);
      nodecg().log.debug(`[OBS] Cannot configure scene item [${scene}: ${item}]: `
        + `${err.error || err}`);
      throw err;
    }
  }
}

const obs = new OBS();
export default obs;
