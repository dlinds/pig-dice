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

function turnRefresh() {
  if (player2.isTurn === true) {
    $("#card-2").addClass("active");  
    $("#card-1").removeClass("active");  
  } 
  if (player1.isTurn === true) {
    $("#card-1").addClass("active");
    $("#card-2").removeClass("active");  
  }
}

function scoreRefresh() {

  let scoreDisplay1 = $("#player-1-score");
  let scoreDisplay2 = $("#player-2-score");
  let turnDisplay = $("#current-turn-total");

  scoreDisplay1.text(player1.score);
  scoreDisplay2.text(player2.score);
  turnDisplay.text(thisTurnScore);
  turnRefresh();
}



$(document).ready(function() {
  scoreRefresh();
  $("#dice-img").click(function() {
    let thisTurn = rollDice();
    scoreKeeper(thisTurn);
    scoreRefresh();
  });
  $("#stop-turn").click(function() {
    scoreRefresh()
  });
  $("#restart").click(function() {
    scoreRefresh();
  });
})