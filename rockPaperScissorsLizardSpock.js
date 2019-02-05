const possibleMoves = ["scissors", "paper", "rock", "lizard", "spock"];
const resultActions = [
  "cuts",
  "covers",
  "blunts",
  "poisons",
  "smashes",
  "decapitates",
  "disproves",
  "crushes",
  "eats",
  "vaporises"
];
var winCount = 0;
var totalGames = 0;

function game() {
  var playerMove = prompt(
    "You're playing 'Rock, Paper, Scissors, lizard, Spock!' What's your move?",
    "rock, paper, scissors, lizard, or spock?"
  )
    .trim()
    .toLowerCase();
  var pMoveNo = possibleMoves.indexOf(playerMove);
  var cMoveNo = Math.floor(Math.random() * 5);
  var computerMove = possibleMoves[cMoveNo];
  var moveDifference = ((pMoveNo - (cMoveNo + 5)) % 5) * -1;
  // totalGames++;

  alert(`You chose ${playerMove}`);
  alert(`The computer chose ${computerMove}`);
  // alert(moveDifference);

  if (moveDifference === 0) {
    alert("It's a DRAW");
  } else if (moveDifference === 1 || moveDifference === 3) {
    if (moveDifference === 1) {
      alert(
        `The player's ${playerMove} ${
          resultActions[pMoveNo]
        } the computer's ${computerMove}`
      );
    } else if (moveDifference === 3) {
      alert(
        `The player's ${playerMove} ${
          resultActions[(pMoveNo + 10 + 5) % 10]
        } the computer's ${computerMove}`
      );
    }
    alert("You WON! :)");
    winCount++;
  } else if (moveDifference === 2 || moveDifference === 4) {
    if (moveDifference === 2) {
      alert(
        `The computer's ${computerMove} ${
          resultActions[(cMoveNo + 10 + 5) % 10]
        } the player's ${playerMove}`
      );
    } else if (moveDifference === 4) {
      alert(
        `The computer's ${computerMove} ${
          resultActions[cMoveNo]
        } the player's ${playerMove}`
      );
    }
    alert("You LOST! :(");
  } else {
    alert("OOPS. Something went wrong :O");
  }
}

for (totalGames = 0; totalGames <= 10; ++totalGames) {
  game();
  alert("You have won " + winCount + " out of " + totalGames + " games");
  var again = confirm("Would you like to play again?");

  if (again) {
    alert("AWESOME!");
  } else {
    alert("Sees ya'!");
    break;
  }
}
