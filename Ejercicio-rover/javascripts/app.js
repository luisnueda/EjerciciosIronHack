var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

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

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      --rover.x;
      rover.y;
      console.log("La posición del rover es " + rover.y + " " + rover.x);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
    case "S":
      ++rover.x;
      rover.y;
      console.log("La posición del rover es " + rover.y + " " + rover.x);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
    case "W":
      --rover.y;
      rover.x;
      console.log("La posición del rover es " + rover.y + " " + rover.x);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
    case "O":
      ++rover.y;
      rover.x;
      console.log("La posición del rover es " + rover.y + " " + rover.x);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
  }
}
function prueba(jugada) {
  for (var i = 0; i < jugada.length; i++) {
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
    }
  }
  console.log("La ruta completa del rover: " + rover.travelLog);
}

