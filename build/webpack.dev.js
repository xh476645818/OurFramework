/**
 * Created by xiaohe on 2018/5/7.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const project = require('../config/project.config.json');
const webpack = require('webpack');
console.log('11111111111', __dirname)
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../src/'),
        historyApiFallback: true,
        compress: true,
        inline: true,
        host: project.devUrl,
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
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
                        options: {
                            camelCase: true,
                            minimize:true,
                            modules: true
                        }
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