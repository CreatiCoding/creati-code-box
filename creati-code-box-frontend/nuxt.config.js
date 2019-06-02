var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');

var dotenv = new Dotenv({
  path: require('path').resolve(process.cwd(), '../key/.envrc')
});
module.exports = {
  build: {
    plugins: [
      new webpack.ProvidePlugin({}),
      new webpack.DefinePlugin(dotenv.definitions)
    ]
  },
  env: process.env
};
