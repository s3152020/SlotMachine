/*----------------------------------------------<Start> Initialize Global Variables---------------------------------------*/
var spinsRemaining=100;
var appleWinTracker=0;
var bananaWinTracker=0;
var orangeWinTracker=0;
var jackpotWinTracker=0;
var saladWinTracker=0;

/*----------------------------------------------<Start> jQuery Call to a Function---------------------------------------*/
function buttonTwoAlert() {
  alert("This button does not do anything yet.");
}
/*----------------------------------------------<End> jQuery Call to a Function---------------------------------------*/


/*----------------------------------------------<Start> Get a Random Emoji---------------------------------------*/
function randomEmoji() {
  for (i=0; i<4; i++) { 
    randomRoll = Math.floor(Math.random()*4);

    switch (randomRoll) {
      case 0: getSymbol = "🍎"; break;
      case 1: getSymbol = "🍌"; break;
      case 2: getSymbol = "🍊"; break;
      case 3: getSymbol = "💲"; break;
    }
  }
  return getSymbol;
}

/*----------------------------------------------<End> Get a Random Emoji---------------------------------------*/


/*----------------------------------------------<Start> jQuery---------------------------------------*/

$(document).ready(function() {
  
  $("#betButtonOne").click(function(){ /* -----------------------Button One functionality------------------------ */
    
    spinsRemaining=spinsRemaining-1;
    if (spinsRemaining == 0) {
      $('#betButtonOne').prop('disabled', true);
    }
    
    $("#spinCounter span").text(spinsRemaining);

    $("#infoBoxOne span").text("---");  /*resets the Info Window*/
    $("#infoBoxOne").css("color", "whitesmoke");
    $("#infoWindowOne").css("background-color", "black");
    $("#infoBoxOne").css("font-size", "8rem");
  
    var box1 = randomEmoji();
    var box2 = randomEmoji();
    var box3 = randomEmoji();
    $("#emojiBoxOne span").text(box1);
    $("#emojiBoxTwo span").text(box2);
    $("#emojiBoxThree span").text(box3);
    
    if (box1 == "🍎" && box2 == "🍎" && box3 == "🍎") {
      $("#infoBoxOne span").text("Apple 🍎 Win!");
      $("#infoBoxOne").css("color", "#f03a17");
      spinsRemaining=spinsRemaining+5;
      appleWinTracker=appleWinTracker+1;
      $("#appleTracker").text("🍎🍎🍎: " + appleWinTracker);
    }
    if (box1 == "🍌" && box2 == "🍌" && box3 == "🍌") {
      $("#infoBoxOne span").text("Banana 🍌 Win!");
      $("#infoBoxOne").css("color", "#ffb900");
      spinsRemaining=spinsRemaining+5;
      bananaWinTracker=bananaWinTracker+1;
      $("#bananaTracker").text("🍌🍌🍌: " + bananaWinTracker);
    }
    if (box1 == "🍊" && box2 == "🍊" && box3 == "🍊") {
      $("#infoBoxOne span").text("Orange 🍊 Win!");
      $("#infoBoxOne").css("color", "#f7630c");
      spinsRemaining=spinsRemaining+5;
      orangeWinTracker=orangeWinTracker+1;
      $("#orangeTracker").text("🍊🍊🍊: " + orangeWinTracker);
    }
    if (box1 == "💲" && box2 == "💲" && box3 == "💲") {
      $("#infoBoxOne span").text("Jackpot 💲💲💲 Win!");
      $("#infoBoxOne").css("color", "#34cd2b");
      spinsRemaining=spinsRemaining+25;
      jackpotWinTracker=jackpotWinTracker+1;
      $("#jackpotTracker").text("💲 💲 💲: " + jackpotWinTracker);
    }
    if (box1 == "🍎" && box2 == "🍌" && box3 == "🍊") {
      $("#infoBoxOne span").text("Fruit Salad 🍎🍌🍊 Win!");
      $("#infoBoxOne").css("color", "purple");
      $("#infoBoxOne").css("font-size", "6rem");
      spinsRemaining=spinsRemaining+10;
      saladWinTracker=saladWinTracker+1;
      $("#saladTracker").text("🍎🍌🍊: " + saladWinTracker);
    }  
  });
  
  $("#betButtonTwo").click(buttonTwoAlert); /*basic function to return an alert that this button isn't ready yet*/

});

/*----------------------------------------------<End> jQuery---------------------------------------*/

