var prompt = require('prompt');
prompt.start();

var jsonFile = [{
		"id":"11000000000000", 
		"name":"DuckTalesCharacter", 
		"email":"setralalair1@bg.com"
	},

    {
    	"id":"222",
    	"name":"DuckTalesCharacterDui", 
    	"email":"seir2@bg.com"
    },

    {
    	"id":"3000", 
	    "name":"Lui", 
	    "email":"seir3@bg.com"
}]


function promptSearchCommand(){
	console.log("Please, write an element to search:")
	prompt.get(['searched'], function(err, result){
		var sSearchedItem = result.searched;

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].id){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				main();
			}
		};

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].name){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				main();
			}
		};

		for (var i = jsonFile.length - 1; i >= 0; i--) {
			if (sSearchedItem == jsonFile[i].MyNewName){
				console.log(jsonFile[i].id);
				console.log(jsonFile[i].name);
				console.log(jsonFile[i].email);
				main();
			}
		};
	})
}

function promptLoadCommand(){
	var jf = require('jsonfile')
	var util = require('util')
	var file = 'file.json'
	jsonFile = jf.readFileSync(file)
	console.log("A file has been loaded!")

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
				main();
			}
		};
		console.log("Wrong ID. No update generated!")
	})
}


function promptMenuCommand(){
	console.log(jsonFile);
	main();
}


function promptAddItem(){

	prompt.get(['id', 'name', 'email'], function(err, result){
		console.log('Data entry confirmed.');

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
	console.log("A file has been saved!")

	main();
}

String.prototype.repeat = function(length) {
 return Array(length + 1).join(this);
};

function promptNiceCommand(){
	var l1 = 0
	var l2 = 0
	var l3 = 0

	var c1 = 0
	var c2 = 0
	var c3 = 0
	
	for (var i = jsonFile.length - 1; i >= 0; i--) {
		if (jsonFile[i].id.length>l1){
			l1 = jsonFile[i].id.length;
		}
		if (jsonFile[i].name.length>l2){
			l2 = jsonFile[i].name.length;
		} 
		if (jsonFile[i].email.length>l3){
			l3 = jsonFile[i].email.length;
		}
	}
	
	c1 = "id".length
	c2 = "name".length
	c3 = "email".length
	console.log("%s", "_".repeat(l1+l2+l3+14)) //14 is the sum of the added spaces and vertical lines between names
	console.log("|| %s %s|| %s %s|| %s %s||", "id", " ".repeat(l1-c1), "name", " ".repeat(l2-c2),"email"," ".repeat(l3-c3))
	console.log("%s", "_".repeat(l1+l2+l3+14))


	for (var i = jsonFile.length - 1; i >= 0; i--) {
		c1 = jsonFile[i].id.length
		c2 = jsonFile[i].name.length
		c3 = jsonFile[i].email.length
		console.log("|| %s %s|| %s %s|| %s %s||", jsonFile[i].id, " ".repeat(l1-c1), jsonFile[i].name, " ".repeat(l2-c2), jsonFile[i].email, " ".repeat(l3-c3))
	}
	console.log("%s", "_".repeat(l1+l2+l3+14))

	main();
}


function main(){
	console.log("Enter a command: - add list nice get remove update search load save end")
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

		}else if (result.command == "nice"){
			promptNiceCommand();

		}else if (result.command == "save"){
			promptSaveCommand();

		}else{
			console.log("Thank you for using our program!");
			console.log("Have a nice day!");
			return;
		};
	})o
}

main();