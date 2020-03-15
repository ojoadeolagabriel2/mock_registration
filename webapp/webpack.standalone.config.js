const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const packageJSON = require('./package.json');

const PUBLIC_PATH = '/public';
const ENV = process.env.mode || 'production'

module.exports = {
  mode: ENV,
  entry: ['@babel/polyfill', './src/microapp_standalone.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: `${__dirname}${PUBLIC_PATH}`,
    publicPath: './',
    filename: 'widget.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5
        }
      })
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: false,
      statsOptions: {
        source: false
      }
    }),
    new HtmlWebpackPlugin({
      title: '[standalone-mode] - registration app',
      version: packageJSON.version,
      template: './templates/index.html',
      hash: true
    }),
    new CopyPlugin([
      { from: './resources' }
    ]),
  ]
};
