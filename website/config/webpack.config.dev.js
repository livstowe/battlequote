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
      // Process JS files.
      {
        // The matching conditions (both test and include must be matched).
        test: /\.jsx?$/,
        include: [
          paths.src,
        ],

        // A loader to apply.
        loader: require.resolve("babel-loader"),

        // Options for the loader.
        options: {
          // Transform ES2015 and React code to normal javascript.
          presets: ["es2015", "react"],
        },
      },

      // Process CSS files.
      {
        // The matching conditions.
        test: /\.css$/,

        use: [
          // A loader to apply.
          require.resolve('style-loader'),

          {
            // A loader to apply.
            loader: require.resolve('css-loader'),

            // Options for the loader.
            options: {
              importLoaders: 1,
            },
          },
        ],
      },

      // Process markdown files.
      {
        // The matching conditions.
        test: /\.md$/,

        use: [
          // A loader to apply.
          require.resolve('html-loader'),

          // A loader to apply.
          require.resolve('markdown-loader'),
        ],
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
    // Generates an HTML file with the <script> injected.
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

    // Enables Hot Module Replacement.
    new webpack.HotModuleReplacementPlugin(),

    // When there are errors while compiling this plugin skips the
    // emitting phase (and recording phase), so there are no assets
    // emitted that include errors.
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
