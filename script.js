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
        } else {
            console.log("You lose. Rock beats Scissors.");
        }
    }

    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("You lose. Papaer beats Rock.");
        } else if (humanChoice === "paper") {
            console.log("It's a draw.");
        } else {
            console.log("You win! Scissors beats Paper!");
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win! Rock beats Scissors!");
        } else if (humanChoice === "paper") {
            console.log("You lose. Scissors beats Paper.");
        } else {
            console.log("It's a draw.");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

