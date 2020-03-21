const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ncp = require('ncp');
const packageJSON = require('./package.json');


if (process.env.mocked_bff === 'true') {
    ncp(`${__dirname}/resources`, `${__dirname}/public`);
}

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: ['@babel/polyfill', './src/index.js'],
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
        new CopyPlugin([{from: './resources'}])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 12345,
        hot: true,
        historyApiFallback: true,
        clientLogLevel: 'debug',
        overlay: {
            warnings: true,
            errors: true
        }
    },
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
