// let div_rock = document.getElementById("rock");
// let div_paper = document.getElementById("paper");
// let div_scissors = document.getElementById("scissors");

// div_rock.addEventListener('click', function () {
//   console.log("You clicked on Rock");
// })
// div_paper.addEventListener('click', function () {
//   console.log("You clicked on paper");
// })
// div_scissors.addEventListener('click', function () {
//   console.log("You clicked on scissors");
// })

function getComputerChoice () {
    let choices = ["rock","paper","scissors"]; 
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }


  function playRound(playerSelection, computerSelection) {
  
    if (computerSelection == "rock" && playerSelection == "paper") {
      console.log(`${playerSelection} beats ${computerSelection}, User Won! `)
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
      console.log(`${computerSelection} beats ${playerSelection}, Computer Won! `)
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
      console.log(`${computerSelection} beats ${playerSelection}, Computer Won! `)
    }

    else if (computerSelection == "paper" && playerSelection == "scissors") {
      console.log(`${playerSelection} beats ${computerSelection}, User Won! `)
    }

    else if (computerSelection == "scissors" && playerSelection == "rock") {
      console.log(`${playerSelection} beats ${computerSelection}, User Won! `)
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
      console.log(`${computerSelection} beats ${playerSelection}, Computer Won! `)
    }

    else if (computerSelection == playerSelection) {
      console.log(`Its ${playerSelection} and ${computerSelection}, So its a tie `);
    }

  }

  // for (i=1; i <= 5; i++) {
  //   console.log(playRound(prompt('Enter your choice'), getComputerChoice()));
  // }