var rand = Math.random();
var number = Math.floor(rand*6) +1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice" +number+ ".png");

var rand1 = Math.random();
var number1 = Math.floor(rand1*6) +1;

document.querySelectorAll("img")[1].setAttribute("src","images/dice" +number1+ ".png");

if(number>number1)
{
    document.querySelectorAll("h1")[0].innerHTML = "Player One 🚩";
}
else if(number<number1)
{
    document.querySelectorAll("h1")[0].innerHTML = "Player Two 🚩";
}
else
{
    document.querySelectorAll("h1")[0].innerHTML = "Draw !";
}