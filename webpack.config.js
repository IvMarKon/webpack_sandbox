const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'fa': ['./fontawesome-js/fa-solid.js', './fontawesome-js/fontawesome.js'],
        'pack': './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'inline-source-map',
    plugins: [
        new MinifyPlugin(),
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};