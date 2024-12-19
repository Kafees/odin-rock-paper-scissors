const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("Do you play rock, paper, or scissors?").toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        console.log("Wrong input");
    }   
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("It's a draw.");
        } else if (humanChoice === "paper") {
            console.log("You win! Paper beats Rock!");
            humanScore += 1;
        } else {
            console.log("You lose. Rock beats Scissors.");
            computerScore += 1;
        }
    }

    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("You lose. Paper beats Rock.");
            computerScore += 1;
        } else if (humanChoice === "paper") {
            console.log("It's a draw.");
        } else {
            console.log("You win! Scissors beats Paper!");
            humanScore += 1;
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win! Rock beats Scissors!");
            humanScore += 1;
        } else if (humanChoice === "paper") {
            console.log("You lose. Scissors beats Paper.");
            computerScore += 1;
        } else {
            console.log("It's a draw.");
        }
    }
}


function playGame() {
    
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose.")
    } else {
        console.log("It is a draw!");
    }
}

playGame();