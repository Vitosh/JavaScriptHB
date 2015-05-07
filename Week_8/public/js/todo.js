$(document).ready(function() {

  var sChosenWord = chooseWord();
  var sGuessedWord = Array(sChosenWord.length + 1).join("_");
  var ulMyList = $('#myList');
  var InputText = $('#idInputText');
  var myDiv = $("#myResult");

  $('#buttonAdd').click(function() {
    var myResult = document.getElementById("myResult")
    var sLastGuess = InputText.val();
    sGuessedWord = ReadAndPrint(sChosenWord, sGuessedWord, sLastGuess);
    if (sGuessedWord === sChosenWord) {
      myResult.innerHTML = "CONGRATULATIONS!" + "<p>" + "You have guessed correctly the word " + "<b>" + sChosenWord + "</b>" + " !"
    } else {
      myResult.innerHTML = sGuessedWord;
    };
  });
});

var words = ['bird', 'nani'];

function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
};

function ReadAndPrint(sChosenWord, sGuessedWord, sLetter) {

  var indices = [];

  for (var i = 0; i < sChosenWord.length; i++) {
    if (sChosenWord[i] === sLetter) {
      indices.push(i);

    }
  }

  for (var z = 0; z < indices.length; z++) {
    indexToReplace = indices[z];
    sGuessedWord = sGuessedWord.replaceAt(indexToReplace, sLetter)
  }
  return sGuessedWord
};


String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};