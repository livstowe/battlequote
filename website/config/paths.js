/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The paths used in this project.
 */
'use strict';

const path = require('path');
const fs = require('fs');

const currentDir = fs.realpathSync(process.cwd());
const absolutePath = relativePath => path.resolve(currentDir, relativePath);

module.exports = {
  build: absolutePath('build'),
  config: absolutePath('config'),
  nodeModules: absolutePath('node_modules'),
  public: absolutePath('public'),
  publicHtml : absolutePath('public/index.html'),
  servedPath: absolutePath('/'),
  src: absolutePath('src'),
  srcIndex: absolutePath('src/index.js'),
};
