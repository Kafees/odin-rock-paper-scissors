const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("Do you play rock, paper, or scissors?");
    if (choices.includes(choice)) {
        return choice;
    } else {
        console.log("Wrong input");
    }   
}