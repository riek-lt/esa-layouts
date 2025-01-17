import type NodeCGTypes from '@nodecg/types';
import needle, { NeedleHttpVerbs, NeedleResponse } from 'needle';
import path from 'path';
import { Readable } from 'stream';
import { Foobar2000, Music as MusicTypes } from '@esa-layouts/types';
import { MusicData } from '@esa-layouts/types/schemas';
import { get as nodecgGetter } from './util/nodecg';
import obsInstance from './util/obs';
import OBS from './util/obs-class';

/**
 * Calculates the absolute file path to one of our local replicant schemas.
 * @param schemaName The replicant/schema filename.
 */
function buildSchemaPath(schemaName: string) {
  return path.resolve(__dirname, '../../../schemas', `${encodeURIComponent(schemaName)}.json`);
}

class Music {
  private nodecg: NodeCGTypes.ServerAPI;
  private config: MusicTypes.Config;
  private obs: OBS;
  private auth: string | undefined;
  private headers: HeadersInit | undefined;
  private positionTimestamp = 0;
  private positionInitial = 0;
  private positionInterval: NodeJS.Timeout | undefined;
  musicData: NodeCGTypes.ServerReplicantWithSchemaDefault<MusicData>;

  constructor(nodecg: NodeCGTypes.ServerAPI, config: MusicTypes.Config, obs: OBS) {
    this.nodecg = nodecg;
    this.config = config;
    this.obs = obs;
    this.auth = (config.username && config.password)
      ? `Basic ${Buffer.from(`${config.username}:${config.password}`).toString('base64')}`
      : undefined;
    this.headers = this.auth ? { Authorization: this.auth } : undefined;
    this.musicData = nodecg.Replicant<MusicData>(
      'musicData',
      { schemaPath: buildSchemaPath('musicData') },
    ) as unknown as NodeCGTypes.ServerReplicantWithSchemaDefault<MusicData>;

    this.musicData.value.connected = false;
    if (config.enabled) {
      this.setup();
    }
  }

  /**
   * Make a request to the Beefweb foobar2000 plugin.
   * @param method Required HTTP method.
   * @param endpoint The endpoint to request.
   */
  private async request(method: NeedleHttpVerbs, endpoint: string): Promise<NeedleResponse> {
    this.nodecg.log.debug(`[Music] API ${method.toUpperCase()} request processing on ${endpoint}`);
    const resp = await needle(method, `http://${this.config.address}/api${endpoint}`, {
      headers: this.headers,
    });
    if (![200, 204].includes(resp.statusCode ?? 0)) {
      const text = await resp.body as string;
      this.nodecg.log
        .debug(`[Music] API ${method.toUpperCase()} request error on ${endpoint}:`, text);
      throw new Error(text);
    }
    this.nodecg.log.debug(`[Music] API ${method.toUpperCase()} request successful on ${endpoint}`);
    return resp;
  }

  /**
   * Updates the stored position of the current track every second.
   */
  private updatePosition(): void {
    if (this.musicData.value.track && this.musicData.value.playing) {
      this.musicData.value.track.position = ((Date.now() - this.positionTimestamp) / 1000)
        + this.positionInitial;
    } else if (this.positionInterval) {
      clearInterval(this.positionInterval);
    }
  }

  /**
   * Sends a "play" command to foobar2000.
   */
  async play(): Promise<void> {
    if (!this.config.enabled) return;
    try {
      await this.request('post', '/player/play');
      this.nodecg.log.info('[Music] Successfully playing');
    } catch (err) {
      this.nodecg.log.warn('[Music] Error playing');
      this.nodecg.log.debug('[Music] Error playing:', err);
    }
  }

  /**
   * Sends a "pause" command to foobar2000.
   */
  async pause(): Promise<void> {
    if (!this.config.enabled) return;
    try {
      await this.request('post', '/player/pause');
      this.nodecg.log.info('[Music] Successfully paused');
    } catch (err) {
      this.nodecg.log.warn('[Music] Error pausing');
      this.nodecg.log.debug('[Music] Error pausing:', err);
    }
  }

  /**
   * Sets up the constant connection to foobar2000.
   */
  private async setup(): Promise<void> {
    try {
      this.nodecg.log.info('[Music] Attempting connection');
      const resp = await this.request(
        'get',
        '/query/updates?player=true&trcolumns=%artist%,%title%',
      );
      this.musicData.value.connected = true;
      this.nodecg.log.info('[Music] Connection successful');

      if (!resp.body) {
        throw new Error('body was null');
      }

      const readable = Readable.from(resp.body);

      readable.on('data', (chunk: Buffer) => {
        let msg: Foobar2000.UpdateMsg | undefined;
        try {
          const cleaned = chunk.toString().slice(6).replace(/(\r\n|\n|\r)/gm, '');
          msg = JSON.parse(cleaned);
        } catch (err) {
          this.nodecg.log.warn('[Music] Error parsing message on connection');
          this.nodecg.log.debug('[Music] Error parsing message on connection:', err);
        }

        if (!msg || !msg.player) {
          return;
        }

        if (this.positionInterval) {
          clearInterval(this.positionInterval);
        }

        const isPlaying = msg.player.playbackState === 'playing';

        this.musicData.value.playing = isPlaying;

        if (msg.player.playbackState === 'stopped') {
          delete this.musicData.value.track;
          return;
        }

        if (msg.player.activeItem.duration > 0) {
          this.musicData.value.track = {
            artist: msg.player.activeItem.columns[0] || undefined,
            title: msg.player.activeItem.columns[1] || undefined,
            position: msg.player.activeItem.position,
            duration: msg.player.activeItem.duration,
          };

          if (isPlaying) {
            this.positionInitial = msg.player.activeItem.position;
            this.positionTimestamp = Date.now();
            this.positionInterval = setInterval(() => this.updatePosition(), 1000);
          }
        }
      });

      readable.on('close', () => {
        this.nodecg.log.warn('[Music] Connection closed');
      });

      readable.on('error', (err) => {
        this.nodecg.log.warn('[Music] Connection error');
        this.nodecg.log.debug('[Music] Connection error:', err);
      });

      readable.on('end', () => {
        this.musicData.value.connected = false;
        this.nodecg.log.warn('[Music] Connection ended, retrying in 5 seconds');
        setTimeout(() => this.setup(), 5 * 1000);
      });

      // Listen to OBS transitions to play/pause correctly.
      this.obs.conn.on('TransitionBegin', (data) => {
        if (data['to-scene']) {
          if (data['to-scene'].includes('[M]')) {
            this.play();
          } else {
            this.pause();
          }
        }
      });
    } catch (err) {
      this.musicData.value.connected = false;
      this.nodecg.log.warn('[Music] Connection failed, retrying in 5 seconds');
      this.nodecg.log.debug('[Music] Connection failed, retrying in 5 seconds:', err);
      setTimeout(() => this.setup(), 5 * 1000);
    }
  }
}

const config = nodecgGetter().bundleConfig.music;
const music = new Music(nodecgGetter(), config, obsInstance); // eslint-disable-line @typescript-eslint/no-unused-vars, max-len
