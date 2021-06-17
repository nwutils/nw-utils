/*

Use this file by doing:

<script type="text/javascript" src="node_modules/nw-utils/src/mount.js"></script>

<script>
  console.log(nw.utils);
</script>

*/


/**
 * This file creates the nw.utils object if it doesn't exist.
 * It DOES NOT directly overwrite the nw.utils in (case other libraries use the same name space).
 * It then appends each utility to nw.utils
 */

const path = require('path');

debugger;

const nwUtils = {
  saveSettings: require(path.join(__dirname, 'utils', 'settings', 'saveSettings.js')),
  saveSettingsSync: require(path.join(__dirname, 'utils', 'settings', 'saveSettingsSync.js')),
  openDefaultBrowser: require(path.join(__dirname, 'utils', 'openDefaultBrowser.js'))
}

if (window && window.nw) {
  if (!window.nw.utils) {
    window.nw.utils = {};
  }
}

if (global && global.nw) {
  if (!global.nw.utils) {
    global.nw.utils = {};
  }
}

Object.keys(nwUtils).forEach(function (key) {
  window.nw.utils[key] = nwUtils[key];
  global.nw.utils[key] = nwUtils[key];
});
