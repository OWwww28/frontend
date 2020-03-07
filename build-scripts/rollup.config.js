// Test file to test Rollup builds for app

const rollup = require("./rollup.js");

const config = rollup.createAppConfig({
  isProdBuild: false,
  latestBuild: true,
  isStatsBuild: false,
});

module.exports = { ...config.inputOptions, output: config.outputOptions };
