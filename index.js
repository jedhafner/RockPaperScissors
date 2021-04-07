let playerScore = 0;
let computerScore = 0;
let gameSummary;
let playerSelection;
let computerSelection;

function chooseEncouragements(){
    
}

const display = document.querySelector('.display');

const weaponOfChoice = document.querySelector(".weaponOfChoice")
const playerWeapon = document.querySelector("#playerWeapon");
const compWeapon = document.querySelector("#compWeapon");
const scoreDisplay = document.querySelector("#scoreDisplay");
const resultsDisplay = document.querySelector("#resultsDisplay");



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
let throwWin = '';

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return;
    } else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerScore++;
        } else {
            playerScore++;
        }
        } else if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                computerScore++;
        } else {
            playerScore++;
        }
    } else {
        if (computerSelection === "rock"){
            computerScore++;
        } else {
            playerScore++;
        }
    }
}
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}
const section = document.querySelector('section');
section.addEventListener('click', Event => {
    playerSelection = Event.target.id;
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
    let scores = `player score: ${playerScore} computer score: ${computerScore}`;
    scoreDisplay.textContent = scores;  
    console.log(scores);
    playerWeapon.textContent = playerSelection;
    compWeapon.textContent = computerSelection;
    if (playerScore == 5){
        resultsDisplay.textContent = "You win!!!";
        resetScore();
    } else if (computerScore == 5){
        resultsDisplay.textContent = "You lose...Select your weapon to try again.";
        resetScore();
    } else {
        resultsDisplay.textContent = "Who will be victorious?";
    }
    
});

