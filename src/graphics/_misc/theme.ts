/* eslint-disable @typescript-eslint/no-var-requires */

import { Configschema } from '@esa-layouts/types/schemas/configschema';

const { theme } = (nodecg.bundleConfig as Configschema).event;
const { default: defaultTheme } = require('./themes/default.theme.css');

defaultTheme.use();

switch (theme) {
  default:
    // do nothing
}
