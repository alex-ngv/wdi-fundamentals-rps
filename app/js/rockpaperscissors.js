////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
  if (move == null) {
    var playerMove = getInput();
  } else playerMove = move;
    return playerMove;
}


function getComputerMove(move) {
    if (move == null) {
      var computerMove = randomPlay();
    } else computerMove = move;
      return computerMove;
}

getComputerMove()

function getWinner(playerMove,computerMove) {
        var winner = '';
        playerMove = getPlayerMove();
        computerMove = getComputerMove();

    if (playerMove==computerMove) {
            winner = 'tie';
        }
    else if ((playerMove =='rock' && computerMove =='paper')||
            (playerMove =='paper' && computerMove =='scissors')||
            (playerMove =='scissors' && computerMove =='rock')){
            winner = 'computer';
        }
        else (winner = 'player');
        console.log(computerMove)
        return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var result = getWinner();
        console.log('The result is - ' + result);
        if (result === 'computer') {
            computerWins++;
        } else if (result === 'player') {
        playerWins++;
        } else {}
    console.log("Player - " + playerWins + " Computer - " + computerWins);
    }
    return [playerWins, computerWins];
}

function playTo(x){
       console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var result = getWinner();
        console.log('The result is - ' + result);
        if (result === 'computer') {
            computerWins++;
        } else if (result === 'player') {
            playerWins++;
        } else {}
    console.log("Player - " + playerWins + " Computer - " + computerWins);
    }
    return [playerWins, computerWins];
}
