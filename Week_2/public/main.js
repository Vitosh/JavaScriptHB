function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function main(){

	iSecretNumber = getRandomInt(1000,10000)
	ReadMe()	
}

//Check with prompt, not lister
function ReadMe(){
	var sys = require("sys");
	var stdin = process.openStdin();

	stdin.addListener("data", function(d) {
		iGuessed = (d.toString().substring(0, d.length-1))
		if (iGuessed == iSecretNumber){
			debug("success");


		} else {
			debug(iGuessed," was not correct! Try again! Hint -",iSecretNumber);
			debug(Status(iGuessed,iSecretNumber));
			ReadMe();
		}
	});
}


function Status(iGuessedNumber1,iSecretNumber1){
	bBulls = true
	bCows = false

	iBulls = checkAnimal(iGuessedNumber1,iSecretNumber1,bBulls)
	iCows = checkAnimal(iGuessedNumber1,iSecretNumber1,bCows)
	return "Bulls:" + iBulls + "  Cows:" + iCows
}


String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


function checkAnimal(iGuessedNumber,iSecretNumber,bBulls){

	sCandidate = iSecretNumber.toString()
	sChecker = iGuessedNumber.toString()
	iSize = sChecker.length

	bulls = 0
	cows = 0

	//Check for bulls
		for (i = 0;i<iSize;i++){
			if (sChecker.substr(i,1) === sCandidate.substr(i,1)){
				bulls++
			}
		}

	//Check for cows
	for (i = 0;i<iSize;i++){
		for (z = 0;z<iSize;z++){
			if (sChecker.substr(i,1) === sCandidate.substr(z,1)){
				if (i != z){
						cows++
					}
				}
			}
		}

	if (bBulls){
		return bulls
	}else{
		return cows
	}
}

main();