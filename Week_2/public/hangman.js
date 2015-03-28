var words = ['bird','university'];
var sChosenWord
var sGuessedWord
var i


function chooseWord(){
	return words[Math.floor(Math.random() * words.length)]
}


function waitForUserInput() {
  rl.question("Command: ", function(answer) {
    if (answer == "exit"){
        rl.close();
    } else {
        waitForUserInput();
    }
  });
}


function main(){
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	sChosenWord = chooseWord()
	sGuessedWord = Array(sChosenWord.length+1).join("_")
	i = 0

	//console.log(sChosenWord)
	console.log(sGuessedWord)
		
	while (sChosenWord != sGuessedWord){
	 	waitForUserInput();
	 	ReadAndPrint(sChosenWord,sGuessedWord,i)
	}
	console.log("Bravo! :)")
	process.exit();
}

function ReadAndPrint(sChosenWord,sGuessedWord,i){
	var rl = require("readline");
	var prompts = rl.createInterface(process.stdin, process.stdout);


	prompts.question("Please, give one letter ==> ", function (sLetter) {
    console.log("Thank you! You have given ==>"+sLetter)

    if (sChosenWord.indexOf(sLetter)>-1){
    	iPosition = sChosenWord.indexOf(sLetter)
    	sGuessedWord = sGuessedWord.replaceAt(iPosition,sLetter)
    	console.log(sGuessedWord)
    } else {
		i++
		console.log("So far "+i+" not successful guess! :) Keep on trying! :)")
    	console.log(sGuessedWord)
    }
});
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

main();
































