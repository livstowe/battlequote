/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The production configuration for webpack.
 */
'use strict';

const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Here the application starts executing and webpack starts bundling.
  entry: [
    paths.srcIndex,
  ],

  // Options related to how webpack emits results.
  output: {
    // The target directory for all output files.
    path: paths.build,

    // The filename template for entry chunks.
    filename: 'bundle.js',

    // The URL to the output directory resolved relative to the HTML page.
    publicPath: paths.servedPath,
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

        // The loader which should be applied.
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
          // The loader which should be applied.
          require.resolve('style-loader'),
          {
            // The loader which should be applied.
            loader: require.resolve('css-loader'),

            // Options for the loader.
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
            },
          },
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
  performance: {
    // Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are found.
    hints: "warning",

    // These options control when webpack emits performance hints.
    maxAssetSize: 2000000, // bytes
    maxEntrypointSize: 4000000, // bytes

    // This property allows webpack to control what files are used to calculate performance hints.
    assetFilter: function(assetFilename) { 
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },

  // Enhance debugging by adding meta info for the browser devtools.
  // The *.map files can be excluded from the build during deployment.
  devtool: "source-map",

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

      // Minify the HTML.
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // Search and replace process.env.NODE_ENV with "production".
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // Minify the JS.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },

      output: {
        comments: false,
      },

      sourceMap: true,
    }),
  ],
};
