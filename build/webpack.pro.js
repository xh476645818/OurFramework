/**
 * Created by xiaohe on 2018/5/7.
 */

//引入path模块，为了路径需要
const path = require('path')
//webpack的合并方法
const merge = require('webpack-merge');
//webpack基本配置文件
const common = require('./webpack.common.js');
//项目基本配置
const project = require('../config/project.config.json');
//清理旧的dist文件，打包后的
const CleanWebpackPlugin = require('clean-webpack-plugin');
//自动生成html，替换
const HtmlWebpackPlugin = require('html-webpack-plugin');
//分离打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(project);

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(css|sass|scss)$/,
            use: [
                {
                    //如果为生产模式，就进行css分离
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader'
                }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        //html文件移动
        new HtmlWebpackPlugin({
            title: project.title,
            template: path.join(__dirname, '../') + 'src/entrance/template.html',
            templateParameters: true,
            inject: 'body'
        }),
        //css分割打包
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ]
});