// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

var counter = 0;

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    console.log(urlObj.pathname);
    if(urlObj.pathname.indexOf("comment") != -1) {