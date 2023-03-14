// Variables 
let userScore = 0;
let compScore = 0;

const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const displayResult = document.querySelector('#result');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const resetButton = document.querySelector('#reset');

// Game Play Function

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playerWon() {
    userScore++;
    userScore_span.innerHTML = userScore;
    displayResult.innerText = "Player Won!!";
    displayResult.style.color = 'green';
}

function computerWon() {
    compScore++;
    compScore_span.innerHTML = compScore;
    displayResult.innerText = "Computer Won!!";
    displayResult.style.color = 'red';
}

function tie() {
    displayResult.innerText = "Tt's a tie!!";
    displayResult.style.color = 'yellow';
}

function buttonChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = playerSelection + computerSelection;

    switch (result) {

        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            playerWon();
            break;

        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            computerWon();
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie();
            break;

    }

}

// Click Event on choices

rockButton.addEventListener('click', function () {
    buttonChoice('rock');
})
paperButton.addEventListener('click', function () {
    buttonChoice('paper');
})
scissorsButton.addEventListener('click', function () {
    buttonChoice('scissors');
})


// Reset Button

resetButton.addEventListener('click', function(){

    userScore = 0;
    compScore = 0;

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    displayResult.innerText = '';

})

