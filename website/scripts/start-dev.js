/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: Starts a development server for the project.
 *              There is no need to build before running this script.
 */
'use strict';

process.env.NODE_ENV = 'development';
console.log(`Starting. Environment: ${process.env.NODE_ENV}`);

const express = require("express");
const config = require("../config/webpack.config.dev");
const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
	colors: true
  },
}));

app.use(webpackHotMiddleware(compiler, {
  log: false, 
  path: '/__webpack_hmr', 
  heartbeat: 10 * 1000
}));

// Start the server.
const serverPort = 7000;
app.listen(serverPort, function() {
  console.log(`Server started. Port: ${serverPort}`);
});
