function getComputerChoice() {
    const computer = Math.floor(Math.random() * 100) + 1;
    if (computer <= 34) {
        return "Rock";
    } else if (computer <= 67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => { 
    playRound("Rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice())
});

const scoreboard = document.querySelector(".scoreboard");
const points = document.createElement("div");

const game = document.querySelector(".game");
const result = document.createElement("div");

const winnerPara = document.querySelector(".winner");
const winner = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

        
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "Rock" && computerChoice == "Scissors")
        || (humanChoice == "Paper" && computerChoice == "Rock")
        || (humanChoice == "Scissors" && computerChoice == "Paper")) {
            result.textContent = "You won! " + humanChoice + " beats " + computerChoice;
            game.appendChild(result);
            humanScore++;
    } else if ((humanChoice == "Rock" && computerChoice == "Paper")
        || (humanChoice == "Paper" && computerChoice == "Scissors")
        || (humanChoice == "Scissors" && computerChoice == "Rock")) {
            result.textContent = "I won " + computerChoice + " beats " + humanChoice;
            game.appendChild(result);
            computerScore++;
    } else if ((humanChoice == "Rock" && computerChoice == "Rock")
        || (humanChoice == "Paper" && computerChoice == "Paper")
        || (humanChoice == "Scissors" && computerChoice == "Scissors")) {
            result.textContent = "It's a draw, we both picked " + humanChoice;
            game.appendChild(result);
    } else {
        result.textContent = "You need to pick between Rock, Paper or Scissors, or I'm taking the point";
        game.appendChild(result);
        computerScore++;
    }

    points.textContent = "Score: Human: " + humanScore + " Computer: " + computerScore;
    scoreboard.appendChild(points);

    if (humanScore == 5) {
        winner.textContent = "You won! Congratulations!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        winner.textContent = "I won! Better luck next time!";
        humanScore = 0;
        computerScore = 0;
    } 
    winnerPara.appendChild(winner);
}