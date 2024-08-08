"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("@esa-layouts/util/nodecg");
const config = (0, nodecg_1.get)().bundleConfig.tracker;
function trackerUrl(path) {
    return `https://${config.address}/tracker${path}`;
}
exports.default = {
    trackerUrl,
};
