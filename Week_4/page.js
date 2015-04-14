var div = document.getElementById("container");

var btn1 = document.createElement("button");
var btn2 = document.createElement("button");

var ScoreA = 0;
var ScoreB = 0;

var txt1 = document.createTextNode("Team A Score " + ScoreA);
var txt2 = document.createTextNode("Team A Score " + ScoreB);

var br = document.createElement('p');

var txtA = document.createTextNode("Team A");
var txtB = document.createTextNode("Team B");

btn1.appendChild(txtA);
btn2.appendChild(txtB);

div.appendChild(txt1);
div.appendChild(txt2);

div.appendChild(br);

div.appendChild(btn1);
div.appendChild(btn2);

btn1.onclick = function(event){
    ScoreA = ScoreA + 1;
    txt1.textContent = ("Team A Score" + ScoreA);
}

btn2.onclick = function(event){
    ScoreB = ScoreB + 1;
    txt2.textContent = ("Team B Score" + ScoreB);

}
