/**
 * Created by xiaohe on 2018/5/7.
 */
var path = require('path');
var webpack = require('webpack');

//分离打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    cache: true,
    context: path.join(__dirname, '../'),
    entry: {
        app: ['babel-polyfill','./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['es3ify-loader','babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        //如果为生产模式，就进行css分离
                        loader: process.env.NODE_ENV == "production" ? MiniCssExtractPlugin.loader : "style-loader"
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader'
                    }],
            },
            //图片压缩
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:"img/[name].[hash].[ext]",
                            publicpath:'./'
                        }
                    },{
                        loader: 'image-webpack-loader',
                        options: {

                        }
                    }
                ]
            },
            //处理字体
            {
                test: /\.(eot|otf|woff|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:8192,
                            name:"./font/[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};