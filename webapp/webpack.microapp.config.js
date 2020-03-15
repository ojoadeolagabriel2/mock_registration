const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const packageJSON = require('./package.json');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: ['@babel/polyfill', './src/microapp_standalone.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '[dev-mode] - registration app',
            version: packageJSON.version,
            template: './templates/index.html',
            hash: true
        }),
        new CopyPlugin([{ from: './resources' }])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
