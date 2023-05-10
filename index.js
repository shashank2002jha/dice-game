var randomNumber1 = Math.random();
var random1 = Math.floor((randomNumber1) *6 )+ 1;
var randomimg1 = "images/" + "dice" + random1+ ".png";


var randomNumber2 = Math.random();
var random2 = Math.floor((randomNumber2) *6 )+ 1;

var randomimg2 = "images/" + "dice" + random2 + ".png";

document.querySelector(".img1").setAttribute("src", randomimg1);
document.querySelector(".img2").setAttribute("src", randomimg2);


if(random1>random2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(random1<random2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a DRAW";
}