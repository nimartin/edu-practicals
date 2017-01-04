const path = require('path');
const webpack = require('webpack');
const url = require('url');

const HtmlWebpackPlugin = require('html-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
    context: __dirname + "/lib",
    entry: {
        js: "./main.js"
    },
    output: {
        path: path.join(__dirname)+"/build",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname)+'/index.ejs',
	    title : "mon titre"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'cheap-source-map'
};
