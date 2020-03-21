const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

const PUBLIC_PATH = '/public';

module.exports = {
    entry: ['@babel/polyfill', './src/microapp_embeded.js'],
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
        publicPath: '/',
        filename: 'bundle.js',
        libraryTarget: 'system'
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
        })
    ]
};