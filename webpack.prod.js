
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry : './src/client/index.js',
    target : 'node',
    mode : 'production',
    output : {
        libraryTarget : 'var',
        library : 'Client'
    },
    optimization : {
        minimizer : [new TerserPlugin({})]
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.scss$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : './src/client/views/index.html',
            filename : './index.html'
        }),
        new MiniCssExtractPlugin({filename : '[name].css'}),
        new WorkBoxPlugin.GenerateSW()
    ]
}