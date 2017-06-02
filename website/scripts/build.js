/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: Creates a production build of the project.
 */
'use strict';

process.env.NODE_ENV = 'production';
console.log(`Building. Environment: ${process.env.NODE_ENV}`);

const fs = require('fs-extra');
const paths = require('../config/paths');
const config = require('../config/webpack.config.prod');
const webpack = require('webpack');

// Empty the build directory.
fs.emptyDirSync(paths.build);

// Compile the project.
const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
   console.log(err.message);
  }
});
