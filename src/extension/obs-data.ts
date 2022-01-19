import type { Configschema } from '@esa-layouts/types/schemas/configschema';
import clone from 'clone';
import sharp from 'sharp';
import * as mqLogging from './util/mq-logging';
import { get as nodecg } from './util/nodecg';
import obs from './util/obs';
import { obsData } from './util/replicants';

const evtConfig = (nodecg().bundleConfig as Configschema).event;
const config = (nodecg().bundleConfig as Configschema).obs;

let gameLayoutScreenshotInterval: NodeJS.Timeout;
async function takeGameLayoutScreenshot(): Promise<void> {
  try {
    const gameLayoutScreenshot = await obs.conn.send('TakeSourceScreenshot', {
      sourceName: config.names.scenes.gameLayout,
      embedPictureFormat: 'png',
      height: 360,
    });
    const compressed = await sharp(Buffer.from(gameLayoutScreenshot.img.split(',')[1], 'base64'))
      .jpeg({ mozjpeg: true }).toBuffer();
    obsData.value.gameLayoutScreenshot = `data:image/jpeg;base64,${compressed.toString('base64')}`;
  } catch (err) {
    nodecg().log.debug('[OBS Data] Cannot take screenshot of game layout:', err);
  }
}

obs.on('connectionStatusChanged', (connected) => {
  obsData.value.connected = connected;
  if (connected) {
    if (evtConfig.online) {
      takeGameLayoutScreenshot();
      gameLayoutScreenshotInterval = setInterval(takeGameLayoutScreenshot, 1 * 1000);
    }
  } else {
    clearInterval(gameLayoutScreenshotInterval);
  }
});

obs.on('streamingStatusChanged', (streaming) => {
  obsData.value.streaming = streaming;
  mqLogging.logStreamingStatusChange(streaming);
});

obs.on('currentSceneChanged', (current, last) => {
  obsData.value.scene = current;
  if (last) {
    mqLogging.logSceneSwitch(last, 'end');
  }
  if (current) {
    mqLogging.logSceneSwitch(current, 'start');
  }
});

obs.on('sceneListChanged', (list) => {
  // Don't include scenes after the first that starts with "---".
  const stopIndex = list.findIndex((s) => s.startsWith('---'));
  obsData.value.sceneList = clone(list).slice(0, stopIndex >= 0 ? stopIndex : undefined);
});

obs.conn.on('TransitionBegin', (data) => {
  obsData.value.transitioning = true;
  if (data.name === 'Stinger') nodecg().sendMessage('showTransition');
});
obs.conn.on('TransitionEnd', () => {
  obsData.value.transitioning = false;
});
