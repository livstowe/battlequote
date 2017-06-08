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

const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const paths = require('../config/paths');
const requestLogger = require('./requestLogger');

// Development specific requires.
const config = require("../config/webpack.config.dev");
const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

// Log all requests.
app.use(requestLogger);

// Catches anything and rewrites it to /index.html.
// This is needed as routing is done by the client.
app.use(historyApiFallback());

// Serves the files emitted from webpack over a connected server.
// No files are written to disk, everything is handled in memory.
app.use(webpackDevMiddleware(compiler, {
  // Display no info to console (only warnings and errors).
  noInfo: true,

  // This must be the same a the public path in webpack.
  publicPath: config.output.publicPath,

  stats: {
    // Show colors when formating the statistics.
     colors: true,
  },
}));

// Adds hot reloading to the server when code changes.
app.use(webpackHotMiddleware(compiler, {
  log: false,

  // The path which the middleware is serving the event stream on.
  path: '/__webpack_hmr',

  // How often to send heartbeat updates to the client to keep the
  // connection alive. Should be less than the client's timeout
  // setting - usually set to half its value.
  heartbeat: 10 * 1000,
}));

// Handle errors.
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Internal Error.
  res.status(500).send('500 - There is a disturbance in the force.');
});

// Start the server.
const serverPort = 7000;
app.listen(serverPort, () => {
  console.log(`Server started. Port: ${serverPort}`);
});
