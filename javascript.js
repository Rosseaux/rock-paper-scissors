//Computer player choice generator

let playerSelection;
let computerSelection;
let compScore = 0;
let playerScore = 0;
let winner = "";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playerSelection = button.id;

    playRound(playerSelection, computerSelection);
       
    });
})

window.addEventListener("keydown", function (e) {
    const box = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    if (!box) return;
    playerSelection = box.id;

    playRound(playerSelection, computerSelection);
})
const boxes = document.querySelectorAll(".button");




function playerScoreTrack() {
    let playerScoreBox = document.querySelector(".player");
    playerScoreBox.textContent = "Player: " + playerScore;
}

function computerScoreTrack() {
    let computerScoreBox = document.querySelector(".computer");
    computerScoreBox.textContent = "Computer: " + compScore;
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    
    
    if (computerSelection === playerSelection) {
        alert("A draw!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock") {
                playerScore = ++playerScore;
                playerScoreTrack();
                alert("Player wins!");
                if (playerScore === 5) {
                    alert("Game over, you win!");
                    let yn = window.prompt("Would you like to play again? Y/N").toLowerCase();
                    if (yn === "y") {
                        startOver();
                    }
            }
        }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
                compScore = ++compScore;
                computerScoreTrack();
                alert("Computer wins!");  
                if (compScore === 5) {
                    alert("Game over, computer wins!");
                    let yn = window.prompt("Would you like to play again? Y/N").toLowerCase();
                    if (yn === "y") {
                        startOver();
                    }
                    else return;
                }
    }
}


const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function startOver() {
    playerScore = 0;
    compScore = 0;
    computerScoreTrack();
    playerScoreTrack();

}


   





