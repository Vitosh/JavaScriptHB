var prompt = require('prompt');
prompt.start();

var jsonFile = [{
		"id":"1", 
		"name":"Hui", 
		"email":"seir1@bg.com"
	},

    {
    	"id":"2",
    	"name":"Dui", 
    	"email":"seir2@bg.com"
    },

    {
    	"id":"3", 
	    "name":"Lui", 
	    "email":"seir3@bg.com"
}]


function promptSearchCommand(){
	console.log("Please, write an element to search:")
	prompt.get(['searched'], function(err, result){
		var sSearchedItem = result.searched;

		// First checking the id
		// The check the name
		// At least check the email

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].id){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				
				return;
			}
		};

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].name){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				return;
			}
		};

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].MyNewName){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				return;
			}
		};
	main();
	})
}

function promptLoadCommand(){
	var jf = require('jsonfile')
	var util = require('util')
	var file = 'file.json'
	jsonFile = util.inspect(jf.readFileSync(file))
	main();
}

function promptGetCommand(){
	console.log("Please, write the id to search:")
	prompt.get(['id'], function(err, result){
		var sSearchedItem = result.id
		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].id){
				console.log (jsonFile[i].id);
				console.log (jsonFile[i].name);
				console.log (jsonFile[i].email);
			}
		};
	main();
	})
}

function promptRemoveCommand(){
	console.log("Please, write the id to delete:")
	prompt.get(['id'], function(err, result){
		var sSearchedItem = result.id
		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].id){
				jsonFile.splice(i,1)
			}
		};
	main();
	})
}

function promptUpdateCommand(){
	console.log("Please, write the id to update:")
	prompt.get(['id','MyNewName','MyNewEmail'], function(err, result){
		var sSearchedItem = result.id;
		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].id){
				jsonFile[i].name = result.MyNewName;
				jsonFile[i].email = result.MyNewEmail;
			}
		};
	main();
	})
}


function promptMenuCommand(){
	console.log(jsonFile);
	main();
}


function promptAddItem(){

	prompt.get(['id', 'name', 'email'], function(err, result){
		console.log('Confirmation of the given data: ');

		var newID = result.id;
		var newName = result.name;
		var newEmail = result.email;

		var objToAdd =  {
		"id":newID, 
		"name":newName, 
		"email":newEmail
	}

	jsonFile[jsonFile.length]=objToAdd;
	main();
	})
}


function promptSaveCommand(){
	var jf = require('jsonfile')
	var file = 'myData.json'

	jf.writeFileSync(file, jsonFile)
	main();
}



function main(){
	console.log("Enter a command: - add list get remove update search load save end")
	prompt.get(['command'], function(err, result){
		if (result.command == "list") {
			promptMenuCommand();

		}else if (result.command == "add"){
			promptAddItem();

		}else if (result.command == "get"){
			promptGetCommand();

		}else if (result.command == "remove"){
			promptRemoveCommand();

		}else if (result.command == "update"){
			promptUpdateCommand();

		}else if (result.command == "search"){
			promptSearchCommand();

		}else if (result.command == "load"){
			promptLoadCommand();

		}else if (result.command == "save"){
			promptSaveCommand();


		}else if (result.command == "quit"){
			console.log("Thank you for using our program!");
			console.log("Have a nice day!");
			return;
		};
	})
}

main();