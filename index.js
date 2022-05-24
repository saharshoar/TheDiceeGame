
/** dices **/
var roundNumbr1 = Math.ceil(Math.random()*6);
var roundNumbr2 = Math.ceil(Math.random()*6);

//document.querySelector("img.img1").setAttribute("src", "images/dice"+ roundNumbr1 +".png");
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ roundNumbr1 +".png");

//document.querySelector("img.img2").setAttribute("src", "images/dice"+ roundNumbr2 +".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ roundNumbr2 +".png");


/** header **/
if (roundNumbr1 === roundNumbr2){
  document.querySelector("h1").innerHTML= "Draw!";
}
else if(roundNumbr1>roundNumbr2){
  document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
}
