/*

Use this file by doing

const nwUtils = require('nw-utils');
console.log(nwUtils);

*/

const nwUtils = {
  saveSettings: require('./utils/settings/saveSettings.js'),
  saveSettingsSync: require('./utils/settings/saveSettingsSync.js'),
  openDefaultBrowser: require('./utils/openDefaultBrowser.js')
}

module.exports = nwUtils;
