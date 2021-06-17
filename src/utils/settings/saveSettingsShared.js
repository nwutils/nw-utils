/**
 * This is the shared funcationality between the sync and async version of saveSettings
 * @param  {object}  settings  A javascript object from the user that will be saved
 * @return {boolean}           Returns false if setting is not an array/object
 * @return {object}            An object for the saveSettings functions to use to know where and what to save
 */
function saveSettingsShared (settings) {
  const path = require('path');

  if (typeof(settings) !== 'object') {
    console.log('Settings must be passed as an object or array.');
    return false;
  }

  let data = {
    appVersion: nw.App.manifest.version,
    nwVersion: nw.process.versions.nw,
    timestamp: new Date(),
    settings: settings
  };

  return {
    file: path.join(nw.App.dataPath, 'settings.json'),
    data: JSON.stringify(data, null, 2)
  };
}

module.exports = saveSettingsShared;
