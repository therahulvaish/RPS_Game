function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function gamePlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie")
    }

    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("Player Won!")
    }

    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("Player Won!")
    }

    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("Player Won!")
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("Computer Won!")
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("Computer Won!")
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("Computer Won!")
    }

}

for (i = 0; i < 5; i++) {
    gamePlay(prompt("Enter your choice").toLowerCase(), getComputerChoice());
}