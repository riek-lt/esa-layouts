import type { Configschema } from '@esa-layouts/types/schemas/configschema';
import { logError } from './util/helpers';
import { get as nodecgGetter } from './util/nodecg';
import obs from './util/obs';
import { obsData } from './util/replicants';
import x32 from './util/x32';
import { ChannelDataReplicant } from '../types/replicant-types';

const nodecg = nodecgGetter();
const config = (nodecg.bundleConfig as Configschema);

// How to map?
// index = player index?
// Store channel index?
// TODO: can channel be numbers?
const channelDefaultValue: ChannelDataReplicant[] = [
  {
    channel: config.x32.channelMapping.player1Game,
    active: true,
  },
  {
    channel: config.x32.channelMapping.player2Game,
    active: false,
  },
  {
    channel: config.x32.channelMapping.player3Game,
    active: false,
  },
  {
    channel: config.x32.channelMapping.player4Game,
    active: false,
  },
];
const channelStatuses = nodecg.Replicant<ChannelDataReplicant[]>('x32-game-channel-status', {
  defaultValue: channelDefaultValue,
});

// For testing
setInterval(() => {
  channelStatuses.value[0].active = !channelStatuses.value[0].active;
  channelStatuses.value[1].active = !channelStatuses.value[1].active;
}, 5000);

const wantedFaders = Object.values(config.x32.channelMapping).map((v) => `/ch/${v}/mix/fader`);

if (config.x32.enable) {
  x32.conn?.on('message', (message) => {
    nodecg.log.info(message);

    // /ch/[01…32]/mix/on -> {OFF, ON} -> OFF meaning the channel is muted?
    // /ch/[01…32]/mix/fader -> level in Db [0.0…1.0(+10dB), 1024] -> not sure what the values are

    // probably doesn't work, we don't specify this event.
    if (message.address.indexOf('/chFaders') === 0) {
      // TODO:
      //  - Set up replicant to link players on screen to mixer events
      //  - Map faders to player indexes (config?)
      //  - Actually hook up an x32 to test this
      nodecg.log.info(`Fader ${message.address} is currently at value ${message.args}`);
    }
  });
}

function getNonGameScenes(): string[] {
  // These scenes will *not* have "LIVE Game/Mics" DCAs audible.
  return [
    obs.findScene(config.obs.names.scenes.commercials),
    obs.findScene(config.obs.names.scenes.intermission),
    obs.findScene(config.obs.names.scenes.videoPlayer),
    obs.findScene(config.obs.names.scenes.countdown),
    obs.findScene(config.obs.names.scenes.hekIntermission),
  ].filter(Boolean) as string[];
}

export function setFaderName(fader: string, name: string): void {
  if (config.x32.enable) {
    x32.conn?.send({
      address: `${fader}/config/name`,
      args: [{ type: 's', value: name }],
    });
  }
}

function toggleFadeHelper(
  address: string,
  scenes: (string | undefined)[],
  data: { 'from-scene'?: string, 'to-scene': string },
  mute = true,
  nofade = false,
): void {
  try {
    let scene1 = scenes.includes(data['to-scene']);
    let scene2 = scenes.includes(data['from-scene']);
    if (!mute) {
      scene1 = scenes.includes(data['from-scene']);
      scene2 = scenes.includes(data['to-scene']);
    }
    if (scene1 && !scene2) {
      if (nofade) {
        x32.setFader(address, 0);
      } else {
        x32.fade(address, 0.75, 0, 1000);
      }
    } else if (!scene1 && scene2) {
      if (nofade) {
        x32.setFader(address, 0.75);
      } else {
        x32.fade(address, 0, 0.75, 1000);
      }
    }
  } catch (err) {
    logError(
      '[Mixer] Error toggling fader [address: %s, scenes: %s, data: %s]',
      err,
      address,
      scenes,
      data,
    );
  }
}

export function toggleLiveMics(scene: string): void {
  const nonGameScenes = getNonGameScenes();
  const fromScene = obsData.value.scene;
  const toScene = obs.findScene(scene);
  if (fromScene && toScene) {
    toggleFadeHelper('/dca/2/fader', nonGameScenes, {
      'from-scene': fromScene, 'to-scene': toScene,
    });
  }
}

// no auto fading for us pls :)
/*
obs.conn.on('TransitionBegin', async (data) => {
  // Auto-fading for HEK's fullscreen intermission.
  const hekIntrmssn = config.obs.names.scenes.hekIntermission;
  if (data['to-scene'].startsWith(hekIntrmssn) && !data['from-scene']?.startsWith(hekIntrmssn)) {
    x32.fade('/ch/21/mix/fader', 0, 0.75, 1000);
  }
  if (data['from-scene']?.startsWith(hekIntrmssn) && !data['to-scene'].startsWith(hekIntrmssn)) {
    x32.fade('/ch/21/mix/fader', 0.75, 0, 1000);
  }

  if (config.x32.enable && config.event.online !== 'partial') {
    const nonGameScenes = getNonGameScenes(); // These scenes will *not* have "LIVE" DCAs audible.
    const intermissionScenes = [ // These scenes *will* have "Intrmsn Mics" DCA audible.
      obs.findScene(config.obs.names.scenes.commercials),
      obs.findScene(config.obs.names.scenes.intermission),
    ];
    toggleFadeHelper('/dca/1/fader', nonGameScenes, data);
    if (currentRunDelay.value.audio > 0) {
      setTimeout(() => { // Delayed hard cut as backup!
        toggleFadeHelper('/dca/2/fader', nonGameScenes, data, true, true);
      }, 1500);
    } else {
      toggleFadeHelper('/dca/2/fader', nonGameScenes, data);
    }
    toggleFadeHelper('/dca/3/fader', intermissionScenes, data, false);
  }
});
*/
