// Variables 

const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#comp-score');
const displayResult = document.querySelector('#result');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');



// Game Play Function

function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }


function buttonChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = playerSelection+computerSelection;

    switch (result) {

        case 'rockrock' :
            displayResult.innerText = "Tt's a tie!!";
            displayResult.style.color = 'orange';
            break;
    
        case 'rockpaper' :
            displayResult.innerText = "Computer Won!!";
            displayResult.style.color = 'red';
            break;
    
        case 'rockscissors' :
            displayResult.innerText = "Player Won!!";
            displayResult.style.color = 'green';
            break;
    
        case 'paperpaper' :
            displayResult.innerText = "Tt's a tie!!";
            displayResult.style.color = 'orange';
            break;
    
        case 'paperrock' :
            displayResult.innerText = "Player Won!!";
            displayResult.style.color = 'green';
            break;
    
        case 'paperscissors' :
            displayResult.innerText = "Computer Won!!";
            displayResult.style.color = 'red';
            break;
    
        case 'scissorsscissors' :
            displayResult.innerText = "Tt's a tie!!";
            displayResult.style.color = 'orange';
            break;
        
        case 'scissorsrock' :
            displayResult.innerText = "Computer Won!!";
            displayResult.style.color = 'red';
            break;

        case 'scissorspaper' :
            displayResult.innerText = "Player Won!!";
            displayResult.style.color = 'green';
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
