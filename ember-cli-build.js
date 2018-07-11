'use strict';
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require('path');

// Ensures tests can find the dummy app config directory
process.env._DUMMY_CONFIG_ROOT_PATH = path.join(__dirname, 'tests', 'dummy');


module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  // this is needed to prevent the building app to assume the root `vendor`
  // directory (since it is used by the addon itself)
  //
  // this is likely a bug upstream in ember-cli that needs to be fixed
  app.trees.vendor = null;

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
