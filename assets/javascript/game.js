	//Getting computer to populate a number between 19 and 120//
var winningNumber=Math.floor(Math.random() * 101) + 19;
$("#winningNumber").text(winningNumber);


	//adding click functions to crystals//

var redCounter = Math.floor(Math.random()*11+1)
var bluCounter = Math.floor(Math.random()*11+1)
var greCounter = Math.floor(Math.random()*11+1)
var ylwCounter = Math.floor(Math.random()*11+1)

var totalCounter = 0
var wins = 0
var losses = 0 


$("#winCount").text(wins);
$("#lossCount").text(losses);

		//restarting the game//
function reset(){
      winningNumber=Math.floor(Math.random()*101+20);
      console.log(winningNumber)
      $('#winningNumber').text(winningNumber);
      redCounter = Math.floor(Math.random()*12+1);
      bluCounter = Math.floor(Math.random()*12+1);
      greCounter = Math.floor(Math.random()*12+1);
      ylwCounter = Math.floor(Math.random()*12+1);
      totalCounter= 0;
      $('#finalTotal').text(totalCounter);
      } 

		//adding winnings 
function winner(){
alert("You won!");
  wins++; 
  $("#winCount").text(wins);
  reset();
}
		//adding losses 
function loser(){
alert ("You lose!");
  losses++;
  $("#lossCount").text(losses);
  reset();
}

$(".crystalRed").click(function(){
    totalCounter = totalCounter+redCounter
       console.log("New totalCounter = " + totalCounter );
    $('#finalTotal').text(totalCounter ); 
          //sets win/lose conditions
        if (totalCounter  == winningNumber){
          winner();
        }
        else if ( totalCounter  > winningNumber){
          loser();
        }   
});

$(".crystalBlu").click(function(){
    totalCounter = totalCounter+bluCounter
    console.log("New totalCounter = " + totalCounter );
    $('#finalTotal').text(totalCounter ); 
          //sets win/lose conditions
        if (totalCounter  == winningNumber){
          winner();
        }
        else if ( totalCounter  > winningNumber){
          loser();
        }   
});

$(".crystalGre").click(function(){
    totalCounter = totalCounter+greCounter
    console.log("New totalCounter = " + totalCounter );
    $('#finalTotal').text(totalCounter ); 
          //sets win/lose conditions
        if (totalCounter  == winningNumber){
          winner();
        }
        else if ( totalCounter  > winningNumber){
          loser();
        }   

});

$(".crystalYlw").click(function(){
    totalCounter = totalCounter+ylwCounter
    console.log("New totalCounter = " + totalCounter );
    $('#finalTotal').text(totalCounter ); 
          //sets win/lose conditions
        if (totalCounter  == winningNumber){
          winner();
        }
        else if ( totalCounter  > winningNumber){
          loser();
        }   

});