'use strict';
var os = require('os');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HappyPack = require('happypack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var y = require('yargs');
var argv = y.argv;

var happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
var assets = require("../dll/assets.json");

var env = process.env.NODE_ENV || process.argv[2] || 'dev';
var port = process.env.NODE_PORT || 3030;
env = 'dev';
var Debug = env == 'dev';
console.log(env + ' -- hh')
var publicPath = {
    'dev': '',
    'uat': '/spss-aa/mobile/',
    'prd': '/mobile/'
};

var proxy = '127.0.0.1:' + port;

function getDate() {
    return (new Date()).toLocaleString('cn').replace(/[\s:-]/g, '');
}

fs.writeFile(path.resolve(__dirname, '../version.js'), 'assets_version(' + getDate() + ')', function (err) {
    if (err) throw err;
});

function cssLoaders(options) {
    options = options || {}
    // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function (loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        if (options.extract) {
            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    // http://vuejs.github.io/vue-loader/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: path.join(__dirname, '../dist/' + env),
        filename: 'js/[name].bundle.js?[hash]',
        chunkFilename: 'js/[name].bundle.js?[hash]',
        publicPath: publicPath[env],
        proxy: proxy
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=js-vue',
                exclude: /node_modules/
            },
            {
                test: /jweixin.js|layer.js$/,
                loader: 'script'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css?modules&localIdentName=[name]-[local][hash:8]!postcss!sass"
                )
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loader: 'url?context=client&name=images/[name].[ext]?[hash]&limit=128'
            }
        ]
    },
    vue: {
        loaders: cssLoaders()
    },
    postcss: [
        cssnano({
            autoprefixer: {
                add: true,
                remove: true,
                browsers: ['> 0%', 'Android 2.3', 'iOS 3.2', 'Safari 3.1', 'IE 10']
            },
            discardComments: {
                removeAll: true
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: true
        })
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src")]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
            'NODE_ENV': JSON.stringify(env),
            '__DEV__': env === 'dev',
            '__FAT__': env === 'fat',
            '__UAT__': env === 'uat',
            '__PRD__': env === 'prd',
            '__TEST__': env === 'test',
            '__DEBUG__': env === 'dev' && !argv.no_debug,
            '__COVERAGE__': !argv.watch && env === 'test',
            '__BASENAME__': JSON.stringify(process.env.BASENAME || '')
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: '资产配置',
            env: env,
            sdc: true,
            sdcId: 'dcspymm36v5rgwyi354yjpm91_6q9m',
            inline: fs.readFileSync('src/utils/flexible.js', 'utf8'),
            bundleName: './dll/' + assets.vendor.js
        }),

        new webpack.DllReferencePlugin({
            context: path.resolve("../dll"),
            manifest: require("../dll/vendor-manifest.json")
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
        new ExtractTextPlugin('[name].css?[hash]', {
            disable: false,
            allChunks: true
        }),
        new HappyPack({
            id: 'js-vue',
            tempDir: '.happypackDev/',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            cache: true,
            verbose: true
        })
        // new DashboardPlugin(dashboard.setData),
    ],
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    devServer: {
        publicPath: publicPath[env],
        hot: true,
        stats: {
            colors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback: true,
        // publicPath: '/',
        port: port
    }
};