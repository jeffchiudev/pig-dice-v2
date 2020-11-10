import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// User Interface Logic
let player1Score = new Player();
player1Score.isPlaying = true;
let player2Score = new Player();
//console.log(player1Score)

function displayScore(diceScore) {
  return $(".userResults").text(diceScore);
}

$(document).ready(function () {
  let formOne = $('#formOne');
  $(formOne).submit(function(event) {
    event.preventDefault();
    if (player1Score.isPlaying == true) {
      let diceScore = rollDice();
      displayScore(diceScore);
      player1Score.addScore(diceScore);
    } else {
      let diceScore = rollDice()
      displayScore(diceScore);
      player2Score.addScore(diceScore);
    }
  })

  let stopPlay = $(".stopPlay")
  $(stopPlay).click(function () {
    $(".results").empty();
    if (player1Score.isPlaying == true) {
      // If there's a 1, it sets roundScore to 0. Otherwise, it sums it and 
      // pushes it to the players total score tracker
      player1Score.finalizeTurn(player1Score.turnScoreCard);
      // Clears out the current rounds past rolls
      player1Score.turnScoreCard = [];
      // Swaps the current player
      player1Score.swapTurn()
      $("#player-1-score").text(player1Score.totalScore);
      //console.log(player2Score)
      if (checkWon(player1Score.totalScore)) {
        $(".results").empty().append("Player 1 is the winner");
        player1Score.totalScore = 0;
        player2Score.totalScore = 0;
        $("#player-1-score").text("0");
        $("#player-2-score").text("0");
      }
      $("#currentPlayer").empty();
      $("#currentPlayer").append("Player 2")
    } else {
      player2Score.finalizeTurn(player2Score.turnScoreCard);
      player2Score.turnScoreCard = [];
      player2Score.swapTurn();
      //console.log(player1Score)
      $("#player-2-score").text(player2Score.totalScore);
      if (checkWon(player2Score.totalScore)) {
        $(".results").empty().append("Player 2 is the winner");
        player2Score.totalScore = 0;
        player1Score.totalScore = 0;
        $("#player-2-score").text("0");
        $("#player-1-score").text("0");
      }
      $("#currentPlayer").empty();
      $("#currentPlayer").append("Player 1")
    }    

  })
});