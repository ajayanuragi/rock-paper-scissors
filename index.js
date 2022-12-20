const playerSelection = prompt("Choose among Rock, Paper and Scissors").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
game();
function getComputerChoice() {
    let computerChoice;
    const choices = ["Rock", "Paper", "Scissors"];
    let c = Math.floor(Math.random() * 3);
    computerChoice = choices[c];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    let result;
    computerSelection = getComputerChoice().toLowerCase();
    console.log("Computer chooses: " + computerSelection)
    if (computerSelection == playerSelection) {
        result = "Match is Tie";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lost, Scissors loses to Rock";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        result = "You Won,Rock beats Scissors"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        result = "You Won, Paper beats Rock";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "You Lost, Paper loses to Scissors";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "You Lost, Rock loses to Paper";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        result = "You Won, Scissors beats Paper";
    } else {
        result = "Kya choose kar rha bhai";
    }
    return result;
}

function game(){
    for(let i =0; i<5; i++){
        console.log(playRound(playerSelection, computerSelection))
    }
}

