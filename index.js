console.log("HIEEEEEE!");

const title = "Rock, Paper, Scissors... What do you choose?";
const moves = "rock, paper, scissors";
var playerMove = prompt(title, moves);
var computerMove = "rock";

function playTheGame() {
  if (computerMove === "rock") {
    if (playerMove === "rock") {
      alert("It's a draw");
    } else if (playerMove === "paper") {
      alert("Player WINS!");
    } else if (playerMove === "scissors") {
      alert("Computer WINS!");
    } else {
      alert("You can't do that move!");
    }
  } else if (computerMove === "paper") {
    if (playerMove === "rock") {
      alert("Computer WINS!");
    } else if (playerMove === "paper") {
      alert("It's a draw");
    } else if (playerMove === "scissors") {
      alert("Player WINS!");
    } else {
      alert("You can't do that move!");
    }
  } else {
    if (playerMove === "rock") {
      alert("Player WINS!");
    } else if (playerMove === "paper") {
      alert("Computer WINS!");
    } else if (playerMove === "scissors") {
      alert("It's a draw");
    } else {
      alert("You can't do that move!");
    }
  }
}

playTheGame(playerMove, computerMove);
