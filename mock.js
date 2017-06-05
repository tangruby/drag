/**
 * 模拟数据请求，方便调度
 */

//端口
var port = 3031;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server')(app);

var http = require('http');
var backServer = http.createServer(app);
backServer.listen((port), function(){
    console.log('BackServer is now running on port '+(port)+'!');

});


