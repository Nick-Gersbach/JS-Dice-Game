const rollBtn = document.querySelector(".roll-btn");
const resetBtn = document.querySelector(".reset-btn");
const playerOne = document.querySelector(".player-one-container");
const playerTwo = document.querySelector(".player-two-container");
let playerTurnTitle = document.querySelector(".player-turn-title");
let playerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneRollNumber = document.querySelector(".player-one-roll-number");
let playerTwoRollNumber = document.querySelector(".player-two-roll-number");
let player1Scoreboard = document.querySelector(".player-one-scoreboard");
let player2Scoreboard = document.querySelector(".player-two-scoreboard");

rollBtn.addEventListener("click", rollDice);

function displayResetBtn() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function displayRollBtn() {
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
}

resetBtn.addEventListener("click", function () {
  displayRollBtn();
  playerTurnTitle.textContent = "Player 1 Turn";
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneRollNumber.textContent = "-";
  playerTwoRollNumber.textContent = "-";
  player1Scoreboard.textContent = playerOneScore;
  player2Scoreboard.textContent = playerTwoScore;
  playerTwo.classList.remove("dice-shadow");
  playerOne.classList.add("dice-shadow");
});

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (playerOneTurn) {
    playerOneScore += randomNumber;
    player1Scoreboard.textContent = playerOneScore;
    playerOneRollNumber.textContent = randomNumber;
    playerTwo.classList.remove("dice-shadow");
    playerOne.classList.add("dice-shadow");
    playerTurnTitle.textContent = `Player one rolled ${randomNumber}`;
  } else {
    playerTwoScore += randomNumber;
    player2Scoreboard.textContent = playerTwoScore;
    playerTwoRollNumber.textContent = randomNumber;
    playerOne.classList.remove("dice-shadow");
    playerTwo.classList.add("dice-shadow");
    playerTurnTitle.textContent = `Player two rolled ${randomNumber}`;
  }

  if (playerOneScore >= 20) {
    playerTurnTitle.textContent = `Player 1 Has Won 🎉`;
    displayResetBtn();
  } else if (playerTwoScore >= 20) {
    playerTurnTitle.textContent = `Player 2 Has Won 🎉`;
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
    displayResetBtn();
  }
  //Shorthand way of saying it's not player 2s turn
  playerOneTurn = !playerOneTurn;
}
