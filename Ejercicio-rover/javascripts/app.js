var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var rover2 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================
var board = [
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "O", null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];
console.log("---------------------------------");
for (var i = 0; i < board.length; i++) {
  var row = board[i];
  for (var j = 0; j < row.length; j++) {
    var column = row[j];
    if (column === "O") {
      var obstaculo = [i, j];
      console.log("|  Hay un obstaculo en : [" + obstaculo + "]  |");
    }
  }
}
console.log("---------------------------------");
// ======================
function turnLeft(vehiculo) {
  console.log("turnLeft was called!");
  switch (vehiculo.direction) {
    case "N":
      vehiculo.direction = "W";
      console.log("El rover esta mirando al Oeste(W)");
      break;
    case "W":
      vehiculo.direction = "S";
      console.log("El rover esta mirando al Sur(S)");
      break;
    case "S":
      vehiculo.direction = "E";
      console.log("El rover esta mirando al Este(E)");
      break;
    case "E":
      vehiculo.direction = "N";
      console.log("El rover esta mirando al Norte(N)");
      break;
  }
}

function turnRight(vehiculo) {
  console.log("turnRight was called!");
  switch (vehiculo.direction) {
    case "N":
      vehiculo.direction = "E";
      console.log("El rover esta mirando al Este(E)");
      break;
    case "E":
      vehiculo.direction = "S";
      console.log("El rover esta mirando al Sur(S)");
      break;
    case "S":
      vehiculo.direction = "W";
      console.log("El rover esta mirando al Oeste(W)");
      break;
    case "W":
      vehiculo.direction = "N";
      console.log("El rover esta mirando al Norte(N)");
      break;
  }
}
function reseteo(vehiculo) {
  vehiculo.x = 0;
  vehiculo.y = 0;
  vehiculo.travelLog = [];
  console.log("** Te has salido del perímetro, vuelves al punto inicial **");
}

function moveForward(vehiculo) {
  console.log("moveForward was called");
  var inLimits = false;
  switch (vehiculo.direction) {
    case "N":
      if (vehiculo.y > 0 && vehiculo.y <= 9) {
        if (board[vehiculo.y - 1][vehiculo.x] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.y--;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y - 1][vehiculo.x] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                (vehiculo.y - 1) +
                "," +
                vehiculo.x +
                "]"
            );
          } else {
            if (board[vehiculo.y - 1][vehiculo.x] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  (vehiculo.y - 1) +
                  "," +
                  vehiculo.x +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
    case "S":
      if (vehiculo.y >= 0 && vehiculo.y < 9) {
        if (board[vehiculo.y + 1][vehiculo.x] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.y++;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y + 1][vehiculo.x] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                (vehiculo.y + 1) +
                "," +
                vehiculo.x +
                "]"
            );
          } else {
            if (board[vehiculo.y + 1][vehiculo.x] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  (vehiculo.y + 1) +
                  "," +
                  vehiculo.x +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
    case "W":
      if (vehiculo.x >= 0 && vehiculo.x < 9) {
        if (board[vehiculo.y][vehiculo.x - 1] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.x--;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y][vehiculo.x - 1] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                vehiculo.y +
                "," +
                (vehiculo.x - 1) +
                "]"
            );
          } else {
            if (board[vehiculo.y][vehiculo.x - 1] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  vehiculo.y +
                  "," +
                  (vehiculo.x - 1) +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
    case "E":
      if (vehiculo.x >= 0 && vehiculo.x < 9) {
        if (board[vehiculo.y][vehiculo.x + 1] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.x++;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y][vehiculo.x + 1] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                vehiculo.y +
                "," +
                (vehiculo.x + 1) +
                "]"
            );
          } else {
            if (board[vehiculo.y][vehiculo.x + 1] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  vehiculo.y +
                  "," +
                  (vehiculo.x + 1) +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
  }
  console.log(
    "La posición del rover es [" + vehiculo.y + "," + vehiculo.x + "]"
  );
  if (inLimits) {
    vehiculo.travelLog.push("[" + vehiculo.y + "," + vehiculo.x + "]");
  }
}

function moveBackwards(vehiculo) {
  console.log("moveBackward was called");
  var inLimits = false;
  switch (vehiculo.direction) {
    case "N":
      if (vehiculo.y > 0 && vehiculo.y <= 9) {
        if (board[vehiculo.y + 1][vehiculo.x] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.y++;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y + 1][vehiculo.x] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                (vehiculo.y + 1) +
                "," +
                vehiculo.x +
                "]"
            );
          } else {
            if (board[vehiculo.y + 1][vehiculo.x] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  (vehiculo.y + 1) +
                  "," +
                  vehiculo.x +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
    case "S":
      if (vehiculo.y > 0 && vehiculo.y < 9) {
        if (board[vehiculo.y - 1][vehiculo.x] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.y--;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y - 1][vehiculo.x] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                (vehiculo.y - 1) +
                "," +
                vehiculo.x +
                "]"
            );
          } else {
            if (board[vehiculo.y - 1][vehiculo.x] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  (vehiculo.y - 1) +
                  "," +
                  vehiculo.x +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
    case "W":
      if (vehiculo.x > 0 && vehiculo.x < 9) {
        if (board[vehiculo.y][vehiculo.x + 1] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.x++;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y][vehiculo.x + 1] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                vehiculo.y +
                "," +
                (vehiculo.x + 1) +
                "]"
            );
          } else {
            if (board[vehiculo.y][vehiculo.x + 1] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  vehiculo.y +
                  "," +
                  (vehiculo.x + 1) +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;

    case "E":
      if (vehiculo.x > 0 && vehiculo.x < 9) {
        if (board[vehiculo.y][vehiculo.x - 1] === null) {
          board[vehiculo.y][vehiculo.x] = null;
          vehiculo.x--;
          board[vehiculo.y][vehiculo.x] = "R";
          inLimits = true;
        } else {
          if (board[vehiculo.y][vehiculo.x - 1] === "O") {
            console.log(
              "Hay un Obstaculo en la posición [" +
                vehiculo.y +
                "," +
                (vehiculo.x - 1) +
                "]"
            );
          } else {
            if (board[vehiculo.y][vehiculo.x - 1] === "R")
              console.log(
                "No puedes avanzar tienes un Rover en la posición [" +
                  vehiculo.y +
                  "," +
                  (vehiculo.x - 1) +
                  "]"
              );
          }
        }
      } else {
        reseteo(vehiculo);
      }
      break;
  }
  console.log(
    "La posición del rover es [" + vehiculo.y + "," + vehiculo.x + "]"
  );
  if (inLimits) {
    vehiculo.travelLog.push("[" + vehiculo.y + "," + vehiculo.x + "]");
  }
}

function comandos(vehiculo, jugada) {
  for (var i = 0; i < jugada.length; i++) {
    if (
      jugada[i] === "f" ||
      jugada[i] === "r" ||
      jugada[i] === "l" ||
      jugada[i] === "b"
    ) {
      switch (jugada[i]) {
        case "f":
          moveForward(vehiculo);
          break;
        case "r":
          turnRight(vehiculo);
          break;
        case "l":
          turnLeft(vehiculo);
          break;
        case "b":
          moveBackwards(vehiculo);
          break;
      }
    } else {
      console.log("El caracter introducido no es valido.");
    }
  }
  console.log("La ruta completa del rover: " + vehiculo.travelLog);
}
