
/**
 * Saves a settings.json file to the Application Data folder on the current OS.
 * @param  {object}  settings  A javascript object to be saved
 * @return {object}  err       If there was an error in saving, return the error
 */
function saveSettingsSync (settings) {
  const fs = require('fs');
  settings = require('./saveSettingsShared.js')(settings);

  if (settings) {
    try {
      fs.writeFileSync(settings.file, settings.data);
    } catch (err) {
      console.log('There was an error saving the settings.');
      console.log(err);
      return err;
    }
  }
};

module.exports = saveSettingsSync;
