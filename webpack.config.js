var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

var isProduction = process.env.NODE_ENV === 'production'
var entry = isProduction ? './index.js' : './src/dev/main.js'
var output = isProduction ? {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-resizable-box.js',
    library: 'vue-resizable-box',
    libraryExport: "default",
    libraryTarget: 'umd',
    umdNamedDefine: true
} : {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'build.js'
}

module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ],
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
            loader: "file-loader"
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'stylus-loader'
            ],
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT && Number(process.env.PORT) || 3000,
        contentBase: path.join(__dirname, 'src/dev'),
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
}

if (isProduction) {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
