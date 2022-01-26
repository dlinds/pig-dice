//Business Logic

function rollDice() {
    const num =  Math.floor(Math.random() * 6);
    return num + 1;
}

rollDice()

function Player(id) {
  this.score = 0;
  this.id = id
}

let player1 = new Player(1);
let player2 = new Player(2);

function scoreKeeper(roll, playerId) {
  if (playerId === 1) {
    player1.score = player1.score + roll;
  } else {
    player2.score = player2.score + roll; 
  }
  console.log("Player 1 Score is " + player1.score + " " + "Player 2 score is " + player2.score );
}

// UI Logic
