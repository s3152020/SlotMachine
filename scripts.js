
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
      case 0: getSymbol = "🍎"; break;
      case 1: getSymbol = "🍌"; break;
      case 2: getSymbol = "🍊"; break;
    }
  }
  return getSymbol;
}

/*----------------------------------------------<End> Get a Random Emoji---------------------------------------*/


/*----------------------------------------------<Start> jQuery---------------------------------------*/

$(document).ready(function() {
  
  $("#betButtonOne").click(function(){ /* -----------------------Button One functionality------------------------ */
    
    $("#infoBoxOne span").text("---");  /*resets the Info Window*/
    $("#infoBoxOne").css("color", "whitesmoke");
    $("#infoWindowOne").css("background-color", "black");
  
    var box1 = randomEmoji();
    var box2 = randomEmoji();
    var box3 = randomEmoji();
    $("#emojiBoxOne span").text(box1);
    $("#emojiBoxTwo span").text(box2);
    $("#emojiBoxThree span").text(box3);
 
    if (box1 == "🍎" && box2 == "🍎" && box3 == "🍎") {
      $("#infoBoxOne span").text("🍎 🍎 Win! 🍎 🍎");
      $("#infoBoxOne").css("color", "#f03a17");
    }
    if (box1 == "🍌" && box2 == "🍌" && box3 == "🍌") {
      $("#infoBoxOne span").text("🍌 🍌 Win! 🍌 🍌");
      $("#infoBoxOne").css("color", "#ffb900");
    }
    if (box1 == "🍊" && box2 == "🍊" && box3 == "🍊") {
      $("#infoBoxOne span").text("🍊 🍊 Win! 🍊 🍊");
      $("#infoBoxOne").css("color", "#f7630c");
    }
    if (box1 == "🍎" && box2 == "🍌" && box3 == "🍊") {
      $("#infoBoxOne span").text("Alphabetical Fruit Salad Win!");
      $("#infoBoxOne").css("color", "purple");
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