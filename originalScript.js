let playerScore = 0;
let computerScore = 0;
let gameSummary;

/*Write a function called computerPlay that randomly returns/
'Rock', 'Paper', or 'Scissors.''*/
function computerPlay(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
    }
}

/*Write a function that plays a single round of Rock Paper Scissors./
The function should take two parameters - the playerSelection and/
computerSelection - and then return a string that declares the winner/
of the round like so: "You Lose! Paper beats Rock." Make sure playerSelection/
is NOT case sensitive.*/
function playRound(playerSelection, computerSelection){
/* add code that evaluates input and prompts again if selection is not rock, paper, or scissors.*/
    let playerWins = `Player wins! ${playerSelection} beats ${computerSelection}.`;
    let computerWins = `Computer wins. ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === computerSelection){
        return "It's a...tie? Go again!";
    } else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerScore++;
            return computerWins;
        } else {
            playerScore++;
            return playerWins;
        }
        } else if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                computerScore++;
                return computerWins;
        } else {
            playerScore++;
            return playerWins;
        }
    } else {
        if (computerSelection === "rock"){
            computerScore++;
            return computerWins;
        } else {
            playerScore++;
            return playerWins;}
    }
}

/*Write a NEW function called game(). Use the previous function inside of/
 this one to play a 5 round game that keeps score and reports a winner or/
  loser at the end.*/
function game(){
    let rounds;
    for (rounds = 1; rounds < 6; rounds++) {
        computerSelection = computerPlay();
        playerSelection = window.prompt(`ROUND: ${rounds} computer score: ${computerScore} | your Score: ${playerScore} | Ready, set, shoot!`, 'rock');
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore){
        gameSummary = (`CONGRATULATIONS!!! You won the game! computer: ${computerScore} player: ${playerScore}`)
    } else {
        gameSummary =(`Sorry, you lost the game. The computer won. computer: ${computerScore} player: ${playerScore}`)
    };
    return gameSummary;
};
console.log(game());