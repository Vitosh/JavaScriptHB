"user strict"

// load the express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// declare our app

app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

// handle get requests at the / endpoint
app.get('/', function(req, res){
 res.send('Hello World\n'); // some voodoo magic
});

// listen for requests
var server = app.listen(1337, function() {
 console.log('Listening on port %d', server.address().port);
});

var users = {
 'john-doe' : { name: 'John Doe', email: 'john@doe.com'},
 'jane-doe' : { name: 'Jane Doe', email: 'jane@doe.com'}
}

// collection endpoints
// get all users
app.get('/users', function(req, res){
 res.jsonp(users);
});

// post new user to the collection
app.post('/users', function(req, res){
 // req.body contains the incoming fields and values
 var id = req.body.id;
 var name = req.body.name;
 var email = req.body.email;
 users[id] = {
 name: name,
 email: email
 };
 res.jsonp({
 msg: 'user created',
 data: users[id]
 });
});


// document endpoints
// get info about user by id
// for eg: /users/john-doe
app.get('/users/:id', function(req, res){
 // get the id from the params
 var id = req.params.id;
 res.jsonp(users[id]);
});

// put an updated version of a user by id
app.put('/users/:id', function(req, res){
 // get the id from the params
 var id = req.params.id;
 // update the info from the body if passed or use the existing one
 users[id].name = req.body.name || users[id].name;
 users[id].email = req.body.email || users[id].email;

 res.jsonp({
 msg: 'user data updated',
 data: users[id]
 });
});

// delete an existing user by id
app.delete('/users/:id', function(req, res){
 var id = req.params.id;
 if(users[id]){
 delete(users[id])
 res.jsonp('user '+id+' successfully deleted!');
 } else {
 res.jsonp('user '+id+' does not exist!');
 }
})