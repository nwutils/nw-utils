
/**
 * Saves a settings.json file to the Application Data folder on the current OS.
 * @param  {object}    settings  A javascript object to be saved
 * @param  {function}  callback  A callback function that an error is passed into if an error occured
 */
function saveSettings (settings, callback) {
  const fs = require('fs');
  settings = require('./saveSettingsShared.js')(settings);

  if (settings) {
    fs.writeFile(settings.file, settings.data, function (err) {
      if (err) {
        console.log('There was an error saving the settings.');
        console.log(err);
      }
      if (callback) {
        callback(err);
      }
    });
  }
};

module.exports = saveSettings;
