window.onload = function() {
  var button = document.getElementById("add-task-button");
  var result = "";
  button.onclick = function(event) {
      var input = document.getElementById("task-input");
      result += input.value;
      console.log(input.value);
  };
};

var br = document.createElement('p');
var txtLst = document.createTextNode(result);

window.appendChild(txtLst)

/*btn1.onclick = function(event){
    ScoreA = ScoreA + 1;
    txt1.textContent = ("Team A Score" + ScoreA);
}

btn2.onclick = function(event){
    ScoreB = ScoreB + 1;
    txt2.textContent = ("Team B Score" + ScoreB);

}
*/