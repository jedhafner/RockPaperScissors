let playerScore = 0;
let computerScore = 0;
let gameSummary;
let playerSelection;
let computerSelection;

const scores = document.createElement('p');
const resultDisplay = document.createElement('p');
const robotTalk = document.createElement('p');
const computerChooses = document.createElement('p');


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

function playRound(playerSelection, computerSelection){
/* add code that evaluates input and prompts again if selection is not rock, paper, or scissors.*/
    let playerWins = `Player scores! ${playerSelection} beats ${computerSelection}.`;
    let computerWins = `Computer scores. ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === computerSelection){
        return "It's a...tie? Go again!";
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
const section = document.querySelector("section");
section.addEventListener('click', Event => {
    resultDisplay.textContent = "";
    playerSelection = Event.target.id;
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
    computerChooses.textContent = `I CHOOSE ${computerSelection}`
    scores.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    if (playerScore == 5){
        resultDisplay.textContent = "You win!!!";
        scores.textContent = "You made it to 5!";
        resetScore();
    } else if (computerScore == 5){
        resultDisplay.textContent = "COMPUTER WINS.";
        scores.textContent = "I HAVE 5. HA. HA.";
        resetScore();
    }


});



const computer = document.querySelector('#computer');
computer.appendChild(computerChooses);


const display = document.querySelector('#Display');
display.append(robotTalk);
display.appendChild(scores);  
display.appendChild(resultDisplay);