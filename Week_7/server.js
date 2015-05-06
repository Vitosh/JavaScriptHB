"use strict"

// dependancies
var express = require('express')
var fs = require("fs");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// create app
var app = express()

// configuration and middleware 
app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


// routes
app.get('/', function (req, res) {
  res.render('index');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})