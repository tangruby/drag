
// module.exports = function(){
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
// }
