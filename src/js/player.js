export default function Player() {
  this.turnScoreCard = [];
  this.totalScore = 0;
  this.isPlaying;
}

Player.prototype.addScore = function(score) {
  this.turnScoreCard.push(score);
}

Player.prototype.finalizeTurn = function(array) {
  let roundTotal = 0;
  if (array.includes(1)) {
    return roundTotal
  } else {
    for (let i = 0; i <= array.length - 1; i++) {
      roundTotal += array[i]; 
    }
    this.totalScore += roundTotal;
    return roundTotal;
  };
}

Player.prototype.swapTurn = function() {
  if (player1Score.isPlaying == true) {
    player1Score.isPlaying = false;
    player2Score.isPlaying = true;
  } else {
    player2Score.isPlaying = false;
    player1Score.isPlaying = true;
  }
}