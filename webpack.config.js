var webpack = require('webpack')
var path = require('path')

module.exports = {

    entry: {
        app: './src/index.js'
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
        }
      ]
    }
}

// module.exports = config;
