var currentPlayer = "X";
var gameOver = false;
var cells = document.getElementsByTagName("td");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (!gameOver && this.innerHTML == "") {
      this.innerHTML = currentPlayer;
      checkForWinner();
      currentPlayer = currentPlayer == "X" ? "O" : "X";
    }
  });
}

function checkForWinner() {
  var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (cells[row[0]].innerHTML == currentPlayer && cells[row[1]].innerHTML == currentPlayer && cells[row[2]].innerHTML == currentPlayer) {
      alert(currentPlayer + " gana!");
      gameOver = true;
      return;
    }
  }

  var tie = true;
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      tie = false;
      break;
    }
  }
  if (tie) {
    alert("Empate!");
    gameOver = true;
  }
}
