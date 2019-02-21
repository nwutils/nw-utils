
/**
 * Saves a settings.json file to the Application Data folder on the current OS.
 * @param  {object}  settings  A javascript object to be saved
 */
function saveSettingsSync (settings) {
  const fs = require('fs');
  const path = require('path');
  settingsFile = path.join(nw.App.dataPath, 'settings.json');

  let data = {
    appVersion: nw.App.manifest.version,
    nwVersion: nw.process.versions.nw,
    timestamp: new Date(),
    settings: settings
  };

  data = JSON.stringify(data, null, 2);

  try {
    fs.writeFileSync(settingsFile, data);
  } catch (err) {
    console.log('There was an error saving the settings');
    console.log(err);
  }
};

export default saveSettingsSync;
