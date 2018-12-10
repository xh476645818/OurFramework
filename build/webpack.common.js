/**
 * Created by xiaohe on 2018/5/7.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    context: path.join(__dirname, '../'),
    entry: {
        app: ['babel-polyfill', './src/entrance/app.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['es3ify-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            //图片压缩
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: "img/[name].[hash].[ext]",
                            publicpath: './'
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
                            limit: 8192,
                            name: "./font/[name].[hash].[ext]"
                        }
                    }
                ]
            },
            //音视频处理
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[ext]',
                }
            }
        ]
    },
    resolve: {
        alias: {
            //图片别名
            'img': path.resolve(__dirname, '../src/public/images'),
            //图片别名
            'media': path.resolve(__dirname, '../src/public/media'),
            //字体别名
            'font': path.resolve(__dirname, '../src/public/font'),
            //data别名
            'data': path.resolve(__dirname, '../src/public/data'),
            //mock别名
            'mock': path.resolve(__dirname, '../src/mock'),
            //action别名
            'action': path.resolve(__dirname, '../src/redux/Action'),
            //reducer别名
            'reducer': path.resolve(__dirname, '../src/redux/Reducer'),
            //saga别名
            'saga': path.resolve(__dirname, '../src/redux/Saga'),
            //store别名
            'store': path.resolve(__dirname, '../src/redux/Store'),
            //容器别名
            'con': path.resolve(__dirname, '../src/containers'),
            //组件别名
            'com': path.resolve(__dirname, '../src/component'),
            //公用方法
            'method': path.resolve(__dirname, '../src/public/method'),
            //第三方的一些js
            'js': path.resolve(__dirname, '../src/public/js'),
            //config基本设置
            'config': path.resolve(__dirname, '../config')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            echarts: 'echarts',
            React: 'react',
            Component: ['react', 'Component'],
            Fragment : ['react', 'Fragment'],
            connect : ['react-redux', 'connect'],
            PropTypes: 'prop-types',
            ReactDOM: 'react-dom',
            Mock:'mockjs',
            axios:'axios'
        })
    ]
};