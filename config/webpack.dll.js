var path = require("path");
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            "vue",
            "vue-resource",
            "vue-router",
            'babel-polyfill',
        ]
    },
    output: {
        path: path.join(__dirname, "../dll"),
        filename: "dll.[name].[hash].js",
        library: "[name]"
    },
    plugins: [
        new CleanPlugin(['./dll'], { root: path.join(__dirname, '../' ) }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DllPlugin({
            path: path.join("./dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve("../dll")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: "./dll"
        }),
    ],
    resolve: {
        root: path.resolve("../dll"),
        modulesDirectories: ["node_modules"]
    }
};