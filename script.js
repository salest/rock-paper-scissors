const message = "Let's play Rock, Paper, Scissors.";
game();

function game()
{
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay(); 
        const playerSelection = window.prompt(message);
        console.log(playRound(playerSelection, computerSelection));
    }
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
    let answer = playerSelection.toLowerCase();
    console.log("Player: " + answer);
    console.log("Comp: " + computerSelection);
    
    if(answer == "rock"){
        if(computerSelection == "rock") return "rock Vs. rock is a draw.";
        else if(computerSelection == "paper") return "You lose, paper beats rock.";
        else if(computerSelection == "scissors") return "you win, rock beats scissors";
    }

    else if(answer == "paper"){
        if(computerSelection == "paper") return "paper Vs. paper is a draw.";
        else if(computerSelection == "scissors") return "You lose, scissors beats paper.";
        else if(computerSelection == "rock") return "you win, paper beats rock";
    }

    else if(answer == "scissors"){
        if(computerSelection == "scissors") return "scissors Vs. scissors is a draw.";
        else if(computerSelection == "rock") return "You lose, rock beats scissors.";
        else if(computerSelection == "paper") return "you win, scissors beats paper";
    }

}