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
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        //如果为生产模式，就进行css分离
                        loader:"style-loader"
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader'
                    }],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});