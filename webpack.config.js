const nodeExternals = require('webpack-node-externals');
const path = require('path');
require('@babel/register');

const config = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [],
  target: 'node',
  externals: [nodeExternals()],
};
module.exports = config;
