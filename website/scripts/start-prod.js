/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: Starts a production server for the project.
 *              The project must be built before calling this script.
 */
'use strict';

process.env.NODE_ENV = 'production';
console.log(`Starting. Environment: ${process.env.NODE_ENV}`);

const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const paths = require('../config/paths');
const requestLogger = require('./requestLogger');

const app = express();

// Log all requests.
app.use(requestLogger);

// Catches anything and rewrites it to /index.html.
// This is needed as routing is done by the client.
app.use(historyApiFallback());

// Serve static content.
app.use(express.static(paths.build));

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
