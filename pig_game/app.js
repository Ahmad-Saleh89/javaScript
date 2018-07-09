/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    // Create a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //  Display dice image
    var diceImg = document.querySelector('.dice');
    diceImg.style.display = 'block';
    diceImg.src = 'dice-' + dice + '.png';

    // Update the round score if the rolled number is not 1
    if(dice !== 1){
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      // Check if Player won the game
      if(scores[activePlayer] + roundScore >= 50){
        document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer] + roundScore;
        gamePlaying = false;
      } 
    }else{
      // Current Player score == 0
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    // hide Dice image
    document.querySelector('.dice').style.display = 'none';
    // Update the  UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // Next player
    nextPlayer();
  }
});

function nextPlayer(){
  document.querySelector('#current-' + activePlayer).textContent = '0';
  roundScore = 0;
  // Ternary Operator
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  // Reset all variables
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = "none";

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('active', 'winner');
}
