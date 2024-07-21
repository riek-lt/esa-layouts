import { get as nodecg } from '@esa-layouts/util/nodecg';

const config = nodecg().bundleConfig.tracker;

function trackerUrl(path: string): string {
  return `https://${config.address}/tracker${path}`;
}

export default {
  trackerUrl,
};
