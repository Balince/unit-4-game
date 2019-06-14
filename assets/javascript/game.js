wins = 0;
losses = 0;

compNo = Math.floor(Math.random() * 100) + 12;

$("#noget").html(compNo);
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalText = document.getElementById("adder");
var but1Text = document.getElementById("but1crys");
var but2Text = document.getElementById("but2");
var but3Text = document.getElementById("but3");
var but4Text = document.getElementById("but4");

$(document).ready(function(){
butn1 = Math.floor(Math.random() * 12) + 1;  
$("#but1crys").html(butn1);
$("#but1crys").click(function(){
});
});







nogetText.textContent = compNo;
winsText.textContent = wins;
lossesText.textContent = losses;
totalText.textContent = adder;
but1Text.textContent = butn1;
document.getElementById("but1crys").innerHTML = butn1;
document.getElementById("but1crys").addEventListener(butn1); 