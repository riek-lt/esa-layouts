import { DonationsToRead } from '@esa-layouts/types/schemas';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import needle from 'needle';
import { get as nodecg } from './util/nodecg';
import { donationTotal, donationsToRead } from './util/replicants';
import { sc } from './util/speedcontrol';

const config = nodecg().bundleConfig;

type ScreenData = {
  currentRun: RunDataActiveRun;
  nextRun: RunDataActiveRun;
  donationsToRead: DonationsToRead;
  donationTotal: number;
};

// JSON documentation:
// https://github.com/OpenEPaperLink/OpenEPaperLink/wiki/Json-template

function generateLargeDisplayData(data: ScreenData) {
  const currentRunners = data.currentRun?.teams
    .flatMap((t) => t.players).map((runner) => runner.name) ?? [];
  const currentS = currentRunners.length > 0 ? 's' : '';

  const nextRunners = data.nextRun?.teams
    .flatMap((t) => t.players).map((runner) => runner.name) ?? [];
  const nextS = nextRunners.length > 0 ? 's' : '';

  const largestUnread = data.donationsToRead
    .reduce((prev, current) => ((prev > current.amount) ? prev : current.amount), 0)
    .toFixed(2);

  return [
    { rotate: 1 },
    { text: [5, 5, 'Current Run', 'fonts/bahnschrift30', 1] },
    { text: [5, 40, `Game: ${data.currentRun?.game}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 60, `Runner${currentS}: ${currentRunners.join(', ')}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 80, `Estimate: ${data.currentRun?.estimate}`, 'fonts/bahnschrift20', 1] },

    { text: [5, 200, 'Next Run', 'fonts/bahnschrift30', 1] },
    { text: [5, 240, `Game: ${data.nextRun?.game}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 260, `Runner${nextS}: ${nextRunners.join(', ')}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 280, `Estimate: ${data.nextRun?.estimate}`, 'fonts/bahnschrift20', 1] },

    { text: [5, 400, 'Donation info', 'fonts/bahnschrift30', 1] },
    { text: [5, 440, `Current total: ${data.donationTotal}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 460, `Pending read: ${data.donationsToRead.length}`, 'fonts/bahnschrift20', 1] },
    { text: [5, 480, `Largest unread donation: ${largestUnread}`, 'fonts/bahnschrift20', 1] },
  ];
}

function generateSmallDonationTotalDisplay(data: ScreenData) {
  return [
    { text: [215, 5, data.donationTotal.toFixed(2), 'fonts/bahnschrift70', 2] },
  ];
}

const displayDataMap = {
  large_display: generateLargeDisplayData,
  small_donation_total: generateSmallDonationTotalDisplay,
};

// TODO: 1 minute cooldown for updates, lodash debounce?
//  Map it by mac address to keep a cache of debounces?
async function updateDisplayInformation(mac: string, data: any): Promise<void> {
  // Fail silently
  if (!config.epaper.enabled) return;

  try {
    await needle(
      'post',
      `${config.epaper.access_point_ip}/jsonupload`,
      {
        mac,
        json: data,
      },
    );
  } catch (e: unknown) {
    nodecg().log.error('[EPaper]: Display update failed', e);
  }
}

function buildScreenData(): ScreenData {
  const { current, next } = sc.runDataActiveRunSurrounding.value;

  return {
    currentRun: current ? sc.runDataArray.value.find((it) => it.id === current) : undefined,
    donationTotal: donationTotal.value,
    donationsToRead: donationsToRead.value,
    nextRun: next ? sc.runDataArray.value.find((it) => it.id === next) : undefined,
  };
}

function sendDonationUpdateToAllDisplays() {
  const sendData = buildScreenData();

  config.epaper.displays.forEach((d) => {
    updateDisplayInformation(
      d.mac,
      displayDataMap[d.info_type](sendData),
    );
  });
}

function updateLargeDisplays() {
  const sendData = buildScreenData();

  config.epaper.displays.filter((d) => d.info_type === 'large_display').forEach((d) => {
    updateDisplayInformation(
      d.mac,
      displayDataMap[d.info_type](sendData),
    );
  });
}

// Only listen to updates if we are enabled
if (config.epaper.enabled) {
  donationTotal.on('change', () => {
    sendDonationUpdateToAllDisplays();
  });
  donationsToRead.on('change', () => {
    updateLargeDisplays();
  });

  sc.runDataActiveRunSurrounding.on('change', () => {
    updateLargeDisplays();
  });
}
