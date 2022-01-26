//Business Logic

function rollDice() {
    const num =  Math.floor(Math.random() * 6);
    return num + 1;
}

//rollDice()

function Player(id) {
  this.score = 0;
  this.id = id;
  this.isTurn = false;
}


function changeActivePlayer() {
  if (player1.isTurn === true) {
    player1.isTurn = false;
    player2.isTurn = true;
  } else if (player2.isTurn = true) {
    player2.isTurn = false;
    player1.isTurn = true;
  }
}

let player1 = new Player(1);
player1.isTurn = true;
let player2 = new Player(2);
let thisTurnScore = 0;

function scoreKeeper(roll) {
  if (roll === 1) {
    thisTurnScore = 0;
    changeActivePlayer();
  } else {
    thisTurnScore = thisTurnScore + roll;
  }
  return thisTurnScore;
}

// UI Logic
