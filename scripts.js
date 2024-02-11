
/*----------------------------------------------<Start> jQuery Call to a Function---------------------------------------*/
function buttonTwoAlert() {
  alert("This button does not do anything yet.");
}
/*----------------------------------------------<End> jQuery Call to a Function---------------------------------------*/


/*----------------------------------------------<Start> Get a Random Emoji---------------------------------------*/
function randomEmoji() {
  for (i=0; i<3; i++) { 
    randomRoll = Math.floor(Math.random()*3);

    switch (randomRoll) {
      case 0: getSymbol = "🍒"; break;
      case 1: getSymbol = "🍋"; break;
      case 2: getSymbol = "💲"; break;
    }
  }
  return getSymbol;
}

/*----------------------------------------------<End> Get a Random Emoji---------------------------------------*/


/*----------------------------------------------<Start> jQuery---------------------------------------*/

$(document).ready(function() {
  
  $("#betButtonOne").click(function(){ /*sets up three separate calls to get a random emoji then puts in the appropriate window*/
    var box1 = randomEmoji();
    var box2 = randomEmoji();
    var box3 = randomEmoji();
    $('#emojiBoxOne span').text(box1);
    $('#emojiBoxTwo span').text(box2);
    $('#emojiBoxThree span').text(box3);
    alert("spinning...");
    if (box1 == "🍒" && box2 == "🍒" && box3 == "🍒") {
      alert("Cherry win");
    }
    if (box1 == "🍋" && box2 == "🍋" && box3 == "🍋") {
      alert("Lemon win");
    }
    if (box1 == "💲" && box2 == "💲" && box3 == "💲") {
      alert("Jackpot win");
    }  
  });
  
  $("#betButtonTwo").click(buttonTwoAlert); /*basic function to return an alert that this button isn't ready yet*/

});

/*----------------------------------------------<End> jQuery---------------------------------------*/




/*
$(document).ready(function(){
    $("#hideButton").click(function(){
      $("p").hide();
    });
    
    $("#showButton").click(function(){
      $("p").show();
    });
    
    $("#fadeButton").click(function(){
      $("p").fadeToggle(3000);
    });

    $("#replacePTextButton").click(function(){
      $("p").text("Text is now replaced");
    });  
    
    $("#replaceWindowFourTextButton").click(function(){
      $('#slotReelWindowFour span').text("New");
    }); 

    $("#replaceWindowFiveTextButton").click(function(){
      $('#slotReelWindowFive span').text("🍒");
    });
   
});
*/