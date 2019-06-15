wins = 0;
losses = 0;


compNo = Math.floor(Math.random() * 100) + 12;

$("#noget").html(compNo);

butn1 = Math.floor(Math.random() * 12) + 1;
butn2 = Math.floor(Math.random() * 12) + 1;  

$(document).ready(function() {
    
    $("#adder").click(function() {
    $("#adder").append(butn1 + butn2);
});

    $("#but1no").on("click", function(){
    $("#adder").html(butn1);
});

    $("#but2no").on("click", function(){
    $("#adder").html(butn2);
});


});





