const message = "Let's play Rock, Paper, Scissors.";


function game()
{
        //const computerSelection = computerPlay(); 
        //const playerSelection = button;
        //console.log(playRound(playerSelection, computerSelection));
        scoreBox.innerHTML = "player: " + playerScore + " | " + "computer: " + computerScore;
}


function computerPlay()
{
    let answer = Math.floor(Math.random() * 3);
    switch(answer){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection)
{    
    console.log("Player: " + playerSelection);
    console.log("Comp: " + computerSelection);
    
    if(playerSelection == "rock"){
        if(computerSelection == "rock") {       
            return "rock Vs. rock is a draw.";
        }
        else if(computerSelection == "paper") {
            computerWinsRound();
            return "You lose, paper beats rock.";
        }
        else if(computerSelection == "scissors") {
            playerWinsRound();
            return "you win, rock beats scissors";
        }
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "paper") {
            return "paper Vs. paper is a draw.";
        }
        else if(computerSelection == "scissors") {
            computerWinsRound();
            return "You lose, scissors beats paper.";
        }
        else if(computerSelection == "rock") {
            playerWinsRound();
            return "you win, paper beats rock";
        }
    }

    else if(playerSelection == "scissors"){
        if(computerSelection == "scissors") {
            return "scissors Vs. scissors is a draw.";
        }
        else if(computerSelection == "rock") {
            computerWinsRound();
            return "You lose, rock beats scissors.";
        }
        else if(computerSelection == "paper") {
            playerWinsRound();
            return "you win, scissors beats paper";
        }
        
    }
}

const rockButton = document.getElementById("rockButton");
const scissorsButton = document.getElementById("scissorsButton");
const paperButton = document.getElementById("paperButton");
const answerBox = document.getElementById("answerBox");
const scoreBox = document.getElementById("scoreBox");
const gameBox = document.getElementById("gameBox");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', function() {
    let computerSelection = computerPlay();
    answerBox.innerHTML = playRound("rock", computerSelection);
});
scissorsButton.addEventListener('click', function() {
    let computerSelection = computerPlay();
    answerBox.innerHTML = playRound("scissors", computerSelection);
});
paperButton.addEventListener('click', function() {
    let computerSelection = computerPlay();
    answerBox.innerHTML = playRound("paper", computerSelection);
});

function playerWinsRound(){
    playerScore++;
    scoreBox.innerHTML = "player: " + playerScore + " | " + "computer: " + computerScore;
    if(playerScore >= 5){
        gameOver("player");
    }
}

function computerWinsRound(){
    computerScore++;
    scoreBox.innerHTML = "player: " + playerScore + " | " + "computer: " + computerScore;
    if(computerScore >= 5){
        gameOver("computer");
    }
}

function gameOver(winner){
    gameBox.innerHTML = winner + " won";
}

//initialize game
game();
