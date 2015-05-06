$(document).ready(function(){

    sChosenWord = chooseWord();
    i = 0;

    $('#buttonAdd').click(function(){
        var ulMyList = $('#myList')
        var InputText = $('#idInputText')

        var sGuessedWord = Array(sChosenWord.length+1).join("_");
        var sLastGuess = InputText.val()

        console.log(sChosenWord);
        console.log(sGuessedWord);
        console.log(sLastGuess);


        ReadAndPrint(sChosenWord,sGuessedWord,i);

        ulMyList.append($('<li>').append(InputText.val()));
    });
});

var words = ['bird','university'];

function chooseWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function main(){

    sChosenWord = chooseWord();
    sGuessedWord = Array(sChosenWord.length+1).join("_");
    i = 0;

    console.log(sGuessedWord);
    ReadAndPrint(sChosenWord,sGuessedWord,i);
}

function countOccurrencies(MyStr,MyChar){
    var count = MyStr.length - MyStr.replace(MyChar,"").length;
    return count;
}

function btnClicked(){
    console.log("CLICKED")
    // ReadMyLetter()
}

function ReadMyLetter(){
    var input = document.getElementById("idName");
    console.log(input);
}


function ReadAndPrint(sChosenWord, sGuessedWord, sLetter) {

    if (sChosenWord.indexOf(sLetter) > -1) {
      z = countOccurrencies(sChosenWord, sLetter);
      iPosition = sChosenWord.indexOf(sLetter);
      sGuessedWord = sGuessedWord.replaceAt(iPosition, sLetter);


      console.log(sGuessedWord);

      if (sChosenWord != sGuessedWord) {
        continue
      } else {
        console.log("Bravo! :)");
        }
    }

    else {
        i++;
        console.log("So far " + i + " not successful guess! :) Keep on trying! :)");
        console.log(sGuessedWord);
      }
    };

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}