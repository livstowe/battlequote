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
const path = require('path');

const app = express();

// Serve static content.
app.use(express.static(path.join(__dirname , '..', 'build')));

// Handle errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  // 500 = Internal Error
  res.status(500).send('There is a disturbance in the force.');
});

// Handle when no functions or routes respond.
// This must be the last middleware function on the stack.
app.use(function (req, res, next) {
  // 404 = Not Found
  res.status(404);

  if (req.accepts('html')) {
    // TODO: Send 404 HTML instead.
    res.send('This is not the web page you are looking for.');
    return;
  }

  if (req.accepts('json')) {
    res.send({ error: 'This is not the web page you are looking for.' });
    return;
  }
});

// Start the server.
const serverPort = 7000;
app.listen(serverPort, function() {
  console.log(`Server started. Port: ${serverPort}`);
});
