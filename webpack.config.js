var webpack = require("webpack"),
    path = require('path'),
    jquery = require('jquery'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    _dirname = path.resolve(__dirname, './project'),
    merge = require('webpack-merge'),
    bundleWebpack = require(path.resolve(__dirname,'./project/webpack.bundle'));
module.exports = merge(bundleWebpack, {
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理（直接引入scss）
            // { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?fsourceMap' },

            //图片文件使用 url-loader 来处理，小于1kb的直接转为base64
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader', query: { limit: 1024, name: 'images/[name].[ext]?[hash:7]' } },
            //用于处理文件（此处用于处理字体图标素材）
            {test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader?name=fonts/[name].[ext]?[hash:7]'
            }
        ]
    },
    //实时更新配置
    devServer: {
        //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
        historyApiFallback: true,
        //热启动（根据文件变化进行编译）
        hot: true,
        //启动服务器
        open: true,
        //设为true时可以在文件发生变化时，更新页面
        inline: true,
        //设置页面访问端口号
        port: 8099
    },
    plugins: [
        //不需要打包html将此处注释便可
        new webpack.HotModuleReplacementPlugin(),
        //打包时开启，可加速打包速度，开发时要关闭
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor/vendor-manifest.json')
        }),
        //webpack定义全局变量
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //webpack压缩js代码（开发环境下不推荐开启，会消耗性能）
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
})
