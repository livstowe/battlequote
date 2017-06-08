/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: Middleware used for logging requests to Express.
 *              This is used in production, so it should be kept minimal.
 */
'use strict';

/**
 * A minimal implementation for padding a number to 2 digits.
 * This is intentionally not generic for performance reasons.
 * @param {*} num The number to pad.
 */
function pad2(num) {
  return ('00' + num).slice(-2);
}

/**
 * Returns a formatted version of the current time.
 */
function timestamp() {
  const date = new Date();
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());
  const hours = pad2(date.getHours());
  const minutes = pad2(date.getMinutes());
  const seconds = pad2(date.getSeconds());

  return `[${year}-${month}-${day} ${hours}:${minutes}:${seconds}]`;
}

module.exports = (req, resp, next) => {
  // Log the request.
  console.log(`${timestamp()} - ip: ${req.ip}, url: ${req.url}`);

  // Call the next middleware.
  next();
};
