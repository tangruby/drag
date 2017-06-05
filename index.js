var webpack = require('webpack');
var nodemon = require('nodemon');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./config/webpack.dev');

var port = process.env.NODE_PORT || 3030;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// app.use(serveStatic(path.resolve(__dirname, "src"), {
// 	maxAge: 365 * 24 * 60 * 60
// }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server')(app);

var http = require('http');
var backServer = http.createServer(app);
backServer.listen((port+1), function(){
    console.log('BackServer is now running on port '+(port+1)+'!');

});

// nodemon({ script: 'main.js' }).on('start', function () {
//     // console.log('BackServer is now running on port '+(port+1)+'!');
//     console.log('nodemon started');
// }).on('quit', function () {
//     console.log('App has quit');
// }).on('crash', function () {
//   console.log('script crashed for some reason');
//   // nodemon.emit('restart');
// });

var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true },
    headers: { 'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    contentBase:'./src/',
    proxy: {
        "/spss-aa-cust/*": webpackConfig.output.proxy,
        "/omm/*":"https://stocklc.stg.pingan.com/"
    },
    setup: function(app) {
        app.use('/dll', express.static('./dll/'));
    }
});
server.listen(port, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('App is now running on port : '+port+'!');
});
