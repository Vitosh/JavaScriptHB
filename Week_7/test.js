// this will serve as our resource on the server
var users = {
 'john-doe' : { name: 'John Doe', email: 'john@doe.com'},
 'jane-doe' : { name: 'Jane Doe', email: 'jane@doe.com'}
}

// will return all the users in json format
// type /users in the browser
app.get('/users', function(req, res){
 res.jsonp(users);
});

// will return only the info for 'john-doe'
app.get('/users/john-doe', function(req, res){
 res.jsonp(users['john-doe']);
});