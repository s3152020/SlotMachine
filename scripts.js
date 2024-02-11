$(document).ready(function(){
    $("#alertButton").click(function(){
      alert("Button was clicked");
    });
  
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