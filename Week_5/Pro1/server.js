"use strict"

// require the dependencies
var express = require('express');

// declare the app
var app = express();

app.use(express.static('public'));

// launch the server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})