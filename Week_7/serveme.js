// load the express module
var express = require('express');

// declare our app
var app = express();

// handle get requests at the / endpoint
app.get('/', function(req, res){
 res.send('Hello World\n'); // some voodoo magic
});

// listen for requests
var server = app.listen(1337, function() {
 console.log('Listening on port %d', server.address().port);
});

var users = {
 'pencho' : { name: 'John Doe', email: 'john@doe.com'},
 'penka' : { name: 'Jane Doe', email: 'jane@doe.com'}
}

// will return all the users in json format
// type /users in the browser
app.get('/users', function(req, res){
 res.jsonp(users);
});

// will return only the info for 'john-doe'
app.get('/users/penka', function(req, res){
 res.jsonp(users['penka']);
});

app.get('/users/pencho', function(req, res){
 res.jsonp(users['pencho']);
});