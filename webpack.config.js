var merge = require('webpack-merge');
var path = require('path');

var baseConfig = require('./webpack.config.base.js');
var devConfig = require('./webpack.config.development.js');
var prodConfig = require('./webpack.config.production.js');
var config = {};

if (process.env.npm_lifecycle_event === 'build') {
  config = merge(baseConfig, prodConfig);
}
else {
  config = merge(baseConfig, devConfig);
}

module.exports = config;
