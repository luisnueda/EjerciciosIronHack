var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================
var board = [
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
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
for(var i = 0; i < board.length; i++){
  var row = board[i];
  for(var j = 0; j < row.length; j++){
    var column = row[j];
    if(column === "O"){
      var obstaculo = [i,j];
      console.log("|  Hay un obstaculo en : [" + obstaculo + "]  |");
    }
  }
}
console.log("---------------------------------");
// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("El rover esta mirando al Oeste(W)");
      break;
    case "W":
      rover.direction = "S";
      console.log("El rover esta mirando al Sur(S)");
      break;
    case "S":
      rover.direction = "E";
      console.log("El rover esta mirando al Este(E)");
      break;
    case "E":
      rover.direction = "N";
      console.log("El rover esta mirando al Norte(N)");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("El rover esta mirando al Este(E)");
      break;
    case "E":
      rover.direction = "S";
      console.log("El rover esta mirando al Sur(S)");
      break;
    case "S":
      rover.direction = "W";
      console.log("El rover esta mirando al Oeste(W)");
      break;
    case "W":
      rover.direction = "N";
      console.log("El rover esta mirando al Norte(N)");
      break;
  }
}
function reseteo() {
  rover.x = 0;
  rover.y = 0;
  rover.travelLog = [];
  console.log("** Te has salido del perímetro, vuelves al punto inicial **");
}

function moveForward(rover) {
  console.log("moveForward was called");
  var inLimits = false;
  switch (rover.direction) {
    case "N":
      if (rover.y > 0 && rover.y < 9) {
        if (board[rover.y][rover.x] === null){
          rover.y--;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      } else {
        reseteo();
      }
      break;
    case "S":
      if (rover.y >= 0 && rover.y < 9) {
        if (board[rover.y][rover.x] === null) {
          rover.y++;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      } else {
        reseteo();
      }
      break;
    case "W":
      if (rover.x >= 0 && rover.x < 9) {
        if (board[rover.y][rover.x] === null){
          rover.x--;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      }else {
        reseteo();
      }
      break;
    case "E":
      if (rover.x >= 0 && rover.x < 9) {
        if (board[rover.y][rover.x] === null){
          rover.x++;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      }else {
        reseteo();
      }
      break;
  }
  if (inLimits) {
    rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
  }
}

function moveBackwards(rover) {
  console.log("moveBackward was called");
  var inLimits = false;
  switch (rover.direction) {
    case "N":
      if (rover.y >=0 && rover.y < 9) {
        if (board[rover.y][rover.x] === null){
          rover.y++;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      } else {
        reseteo();
      }
      break;
    case "S":
      if (rover.y > 0 && rover.y <= 9) {
        if (board[rover.y][rover.x] === null){
          rover.y--;
          inLimits = true;
          console.log("La posición del rover es [" + rover.y + "," + rover.x + "]");
        }else{
          console.log("¡¡Hay un obstaculo en [" + rover.y + "," + rover.x + "]!!");
        }
      } else {
        reseteo();
      }
      break;
    case "W":
      if (rover.x > 0 && rover.x < 9) {
        rover.x++;
        console.log(
          "La posición del rover es [" + rover.y + "," + rover.x + "]"
        );
      } else {
        reseteo();
      }
      break;
    case "E":
      if (rover.x > 0 && rover.x < 9) {
        rover.x--;
        inLimits = true;
      } else {
        reseteo();
      }
      break;
  }
  if (inLimits) {
    rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
  }
}


function comandos(jugada) {
  for (var i = 0; i < jugada.length; i++) {
    if (
      jugada[i] === "f" ||
      jugada[i] === "r" ||
      jugada[i] === "l" ||
      jugada[i] === "b"
    ) {
        switch (jugada[i]) {
          case "f":
            moveForward(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "b":
            moveBackwards(rover);
            break;
        }
    } else {
      console.log("El caracter introducido no es valido.");
    }
  }
  console.log("La ruta completa del rover: " + rover.travelLog);
}
