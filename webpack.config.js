const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  // allows importing '.ts' files without the extension
  // e.g. `import example from './example'`
  resolve: {
    extensions: ['.ts', '.js'],
  },

  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'main.js',
  },
  // required if using webpack-dev-server

  // devServer: {
  //   contentBase: './dist',
  // },
  devServer: {
    contentBase: './public',
    port: 8080,
    hotOnly: true,
  },
};
