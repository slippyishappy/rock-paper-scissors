let btns = document.querySelectorAll(".choices button");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let restart = document.querySelector("#restart");
let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");
let choice = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let question = ["fa-solid", "fa-question", "fa-2xl"];
let rock = ["fa-solid", "fa-hand-back-fist", "fa-2xl"];
let paper = ["fa-solid", "fa-hand", "fa-2xl"];
let scissors = ["fa-solid", "fa-hand-scissors", "fa-2xl"];

function getComputerChoice() {
    return choice[(Math.floor((Math.random() * 3)))];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function changeIcon(selection, choice) {
    choice.removeAttribute('class');
    if (selection === "rock") {
        rock.forEach((ele) => {
            choice.classList.add(...rock);
        });
    } else if (selection === "paper") {
        paper.forEach((ele) => {
            choice.classList.add(...paper);
        });
    } else if (selection === "scissors") {
        scissors.forEach((ele) => {
            choice.classList.add(...scissors);
        });
    }
}

function playerRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            result.textContent = `You Loose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "rock" && computerSelection === "scissors")) {
            playerScore++;
            result.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else if (playerSelection === computerSelection) {
            result.textContent = "It's a tie!";
    }
                
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            result.textContent = "You won!";
        } else if (playerScore < computerScore) {
            result.textContent = "You lost";
        }
        btns.forEach(btn => {
            btn.disabled = true;
        });
            restart.style.cssText = "display: block;";
        }
    
        score.textContent = `${playerScore} - ${computerScore}`;
        changeIcon(playerSelection, playerChoice);
        changeIcon(computerSelection, computerChoice);
}

score.textContent = `${playerScore} - ${computerScore}`;
         
restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    question.forEach((ele) => {
        computerChoice.classList.add(...question);
        playerChoice.classList.add(...question);
    });
    restart.style.cssText = "display: none;";
    score.textContent = `${playerScore} - ${computerScore}`;
    btns.forEach(btn => {
        btn.disabled = false;
    });
})

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        playerSelection = event.target.value;
        computerSelection = getComputerChoice();
        playerRound(playerSelection, computerSelection);
        }
    )}
);