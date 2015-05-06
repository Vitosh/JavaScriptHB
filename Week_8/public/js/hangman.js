$(document).ready(function(){
    console.log("READY!");

    $('#buttonAdd').click(function(){
        btnClicked();
    });

    function btnClicked(){
    var input = document.getElementById("idName");
    console.log(input);
    }
});




// var words = ['bird','university'];

// function chooseWord(){
//     return words[Math.floor(Math.random() * words.length)]
// }

// function main(){

//     sChosenWord = chooseWord();
//     sGuessedWord = Array(sChosenWord.length+1).join("_");
//     i = 0;

//     console.log(sGuessedWord);
//     ReadAndPrint(sChosenWord,sGuessedWord,i);
// }

// function countOccurrencies(MyStr,MyChar){
//     var count = MyStr.length - MyStr.replace(MyChar,"").length;
//     return count;
// }

// function btnClicked(){
//     console.log("CLICKED")
//     // ReadMyLetter()
// }

// function ReadMyLetter(){
//     var input = document.getElementById("idName");
//     console.log(input);
// }


// function ReadAndPrint(sChosenWord,sGuessedWord,i){
//     var sys = require("sys");
//     var stdin = process.openStdin();

//     console.log("Please, give one letter ==> ")
//     stdin.addListener("data", function(d) {
//         sLetter = (d.toString().substring(0, d.length-1))

//         console.log("Thank you! You have given ==>"+sLetter)

//         if (sChosenWord.indexOf(sLetter)>-1){
//             z = countOccurrencies(sChosenWord,sLetter);
//             iPosition = sChosenWord.indexOf(sLetter)
//             sGuessedWord = sGuessedWord.replaceAt(iPosition,sLetter)


//             console.log(sGuessedWord)

//             if (sChosenWord != sGuessedWord){
//                 ReadAndPrint(sChosenWord,sGuessedWord,i)
//             }else{
//                 console.log("Bravo! :)");

//             }
//         } else {
//             i++
//             console.log("So far "+i+" not successful guess! :) Keep on trying! :)")
//             console.log(sGuessedWord)
//             ReadAndPrint(sChosenWord,sGuessedWord,i);
//         }
//     });
// }

// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// }

// console.log("TESTME!!!")
// // main();