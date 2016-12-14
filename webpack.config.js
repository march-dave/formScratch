const webpack = require('webpack')
const path = require('path')

// import webpack from 'webpack';
// import path from 'path';

module.exports = {

    devtool: 'source-map',

    entry: {
        app: './src/index'
    },
    output: {
        filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
    },

    devServer: {
        inline: true,
        port: 3000
    },

    devtool: '#source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'stage-0', 'react']
          }
        },
        // Bootstrap 3 jquery requirement
        { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }
      ]
    }
}

// module.exports = config;
