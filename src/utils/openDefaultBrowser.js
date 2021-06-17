
/**
 * Opens the given URL in the end-user's default browser.
 * Attempts to run from the current Window, or from Node's global if no window found.
 *
 * @param  {string}     url  A valid URL to be opened
 * @return {undefined}       Returns undefined if url is invalid
 */
function openDefaultBrowser (url) {
  if (!url || typeof(url) !== 'string' || !require('url').parse(url).host) {
    console.log('Invalid URL');
    return;
  }

  if (window && window.nw && window.nw.Shell) {
    window.nw.Shell.openExternal(url);
  } else if (global && global.nw && global.nw.Shell) {
    global.nw.Shell.openExternal(url);
  }
}

module.exports = openDefaultBrowser;
