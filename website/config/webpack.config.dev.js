/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The development configuration for webpack.
 */
'use strict';

const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Here the application starts executing and webpack starts bundling.
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    paths.srcIndex,
  ],

  // Options related to how webpack emits results.
  output: {
    // The target directory for all output files.
    path: paths.build,

    // The filename template for entry chunks.
    filename: 'bundle.js',

    // The URL to the output directory resolved relative to the HTML page.
    // In development, these files are served virtually from '/'.
    publicPath: '/',
  },

  // Configuration regarding modules.
  module: {
    // Rules for modules (configure loaders, parser options, etc.).
    rules: [
      // Process JS with Babel.
      {
        // The matching conditions (both test and include must be matched).
        test: /\.jsx?$/,
        include: [
          paths.src,
        ],

        // The loader which should be applied.
        loader: "babel-loader",

        // Options for the loader.
        options: {
          // Transform ES2015 and React code to normal javascript.
          presets: ["es2015", "react"],
        },
      },
    ],
  },

  // Options for resolving module requests (does not apply to resolving to loaders).
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    modules: [
      paths.nodeModules,
    ],

    // Extensions that are used.
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  // Controls notifications from webpack of assets and entrypoints that exceed
  // a specific file limit.
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed.
  performance: {
    hints: false,
  },

  // Enhance debugging by adding meta info for the browser devtools.
  devtool: "cheap-module-source-map",

  // Lets you precisely control what bundle information gets displayed.
  stats: "errors-only",
  
  // List of additional plugins.
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      // Injects the <script>.
      inject: true,

      // The HTML file to copy from.
      template: paths.publicHtml,
    }),

    // Search and replace process.env.NODE_ENV with "development".
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    // This is necessary to emit hot updates (currently CSS only).
    new webpack.HotModuleReplacementPlugin(),
  ],
};
