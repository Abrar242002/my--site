const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn");
let computerChoice;
let playerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  randomChoice = Math.floor(Math.random() * possibleChoices.length);

  if (randomChoice === 0) {
    computerChoice = "Rock";
  }
  if (randomChoice === 1) {
    computerChoice = "Paper";
  }
  if (randomChoice === 2) {
    computerChoice = "Scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "Rock" && playerChoice === "Paper") {
    result = "You Won!";
  }
  if (computerChoice === "Rock" && playerChoice === "Scissor") {
    result = "You Lost!";
  }
  if (computerChoice === "Paper" && playerChoice === "Rock") {
    result = "You Lost!";
  }
  if (computerChoice === "Paper" && playerChoice === "Scissor") {
    result = "You Won!";
  }
  if (computerChoice === "Scissor" && playerChoice === "Paper") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissor" && playerChoice === "Rock") {
    result = "You Won!";
  }
  resultDisplay.innerHTML = result;
}
