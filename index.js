


var random1 = (Math.floor(Math.random()*6+1));

var randompic1 = "dice" + random1 + ".png";
var randomsrc1 = "images/" + randompic1;

var first = document.querySelectorAll("img")[0];

first.setAttribute("src", randomsrc1);



var random2 = (Math.floor(Math.random()*6+1));
var randompic2 = "dice" + random2 + ".png";
var randomsrc2 = "images/" + randompic2;
var second = document.querySelectorAll("img")[1];
second.setAttribute("src", randomsrc2)


if(random1 > random2)
{
document.querySelector("h1").innerHTML = "Player1 wins";
}

else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "Player2 wins";
}

else {
  document.querySelector("h1").innerHTML = "Draw";
}
