'use strict';
var os = require('os');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HappyPack = require('happypack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsParallelPlugin = require('webpack-uglify-parallel');
var y = require('yargs');
var argv = y.argv;

var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
var assets = require("../dll/assets.json");

var env = process.env.NODE_ENV || process.argv[2] || 'prd';
console.log(env)
env = env.replace(/--/g,'');
var Debug = env == 'prd';
var publicPath = {
    'mobile':'/',
    'fat':'/spss-aa/mobile/',
    'uat': '/spss-aa/mobile/',
    'prd':'/mobile/'
};

function getDate(){
    return (new Date()).toLocaleString('cn').replace(/[\s:-]/g,'');
}


fs.writeFile(path.resolve(__dirname,'../version.js'),'assets_version('+getDate()+')',function (err) {
    if (err) throw err;
});


module.exports = {
    devtool: 'cheap-source',
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    // entry: {
    //     main: "./src/app.js"
    // },
    output: {
        path: path.join(__dirname, '../output/' + env),
        filename: 'js/[name].bundle.js?[hash]',
        chunkFilename:'js/[name].bundle.js?[hash]',
        publicPath: publicPath[env]
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
            // {
            //     test: /\.js$/,
            //     loader: 'babel',
            //     exclude: /node_modules/
            // },
            {
                test: /\.json$/,
                loader: 'json'
            },
            // {
            //     test: /\.html$/,
            //     loader: 'vue-html'
            // },
            {
                test: /\.(js)$/,
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
                loader: 'url?context=client&name=images/[name].[ext]?[hash]&limit=512'
            }
        ]
    },
    imageWebpackLoader:{
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    postcss: [
        cssnano({
            autoprefixer: {
                add: true,
                remove: true,
                browsers: ['> 0%','Android 2.3','iOS 3.2','Safari 3.1','IE 10']
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
        outputStyle:'expanded',
        sourceMap:true,
        sourceMapContents:true,
        includePaths: [path.resolve(__dirname, "./src")]
    },
    plugins: [
        new CleanPlugin([env], { root: path.join(__dirname, '../output/' ) }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'NODE_ENV'     : JSON.stringify(env),
            '__DEV__'      : env === 'mobile',
            '__FAT__'      : env === 'fat',
            '__UAT__'      : env === 'uat',
            '__PRD__'      : env === 'prd',
            '__TEST__'     : env === 'test',
            '__DEBUG__'    : env === 'mobile' && !argv.no_debug,
            '__COVERAGE__' : !argv.watch && env === 'test',
            '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
        }),
        // new UglifyJsParallelPlugin({
        //   workers: os.cpus().length,
        //   compressor: {
        //     warnings: false
        //    },
        //    output: {
        //      comments: false
        //    }
        // }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html',
            env:env,
            sdc:true,
            inline: fs.readFileSync('src/utils/flexible.js', 'utf8'),
            sdcId:'dcspymm36v5rgwyi354yjpm91_6q9m',
            bundleName: publicPath[env] + 'dll/' + assets.vendor.js,
            "files": {
                "js": [ publicPath[env] + 'dll/' + assets.vendor.js],
            }
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeRedundantAttributes: true,
            //     useShortDoctype: true,
            //     removeEmptyAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     keepClosingSlash: true,
            //     minifyJS: true,
            //     minifyCSS: true,
            //     minifyURLs: true
            // }
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve("../dll"),
            manifest: require(path.resolve("./dll") + "/vendor-manifest.json")
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce:1.5,
            moveToParents:true
        }),
        new ExtractTextPlugin('css/[name].css?[hash]',{
            disable: false,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, "../dll"),
              to: path.resolve(__dirname, '../output/' + env + '/dll')
            },
            {
              from: path.resolve(__dirname, "../version.js"),
              to: path.resolve(__dirname, '../output/' + env + '/version.js')
            }
            
        ]),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HappyPack({
            id: 'js-vue',
            loaders: [ 'babel-loader' ],
            threadPool: happyThreadPool,
            cache: true,
            verbose: true
        })
    ],
    resolve: {
        extensions: ['', '.js','.vue','.scss']
    }
};
