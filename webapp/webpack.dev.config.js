const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const bodyParser = require('body-parser');
const ncp = require('ncp');
const packageJSON = require('./package.json');

const VALIDATION_RULES_URL = '/validation/rules';
const ADDRESS_LOOKUP_URL = '/addresses/lookup';

if (process.env.mocked_bff === 'true') {
    ncp(`${__dirname}/resources`, `${__dirname}/public`);
}

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
        },
        before (app) {
            app.use(bodyParser.json());
            if (process.env.mocked_bff === 'true') {
                // mock validation rules
                app.get(VALIDATION_RULES_URL, (req, res) => {
                    return res.sendFile(
                        path.resolve(__dirname, 'public/validation/validation.json')
                    );
                });

                // mock address lookup
                app.get(ADDRESS_LOOKUP_URL, (req, res) => {
                    return res.sendFile(
                        path.resolve(__dirname, 'public/addresses/lookup.json')
                    );
                })
            }
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
