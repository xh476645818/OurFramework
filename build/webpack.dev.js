/**
 * Created by xiaohe on 2018/5/7.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const project = require('../config/project.config.json');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        host: project.devUrl,
        historyApiFallback: true,
        // compress: true,
        inline: true,
        hot: true,
        port: project.devPort,
    },
    module: {
        rules: []
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});