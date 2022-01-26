//Business Logic

function rollDice() {
    const num =  Math.floor(Math.random() * 6);
    return num + 1;
}

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

function addScore() {
  if (player1.isTurn === true) {
    player1.score = player1.score + thisTurnScore;  
  } else if (player2.isTurn === true) {
    player2.score = player2.score + thisTurnScore;
  }
  thisTurnScore = 0;
}

// UI Logic

function checkForFinish() {
  let score1 = player1.score;
  let score2 = player2.score;

  if (score1 >= 100) {
    $("#card-1").addClass("winner");
    $("#card-1").removeClass("active");
    $("#stop-turn").addClass("hidden");
    $("#restart").removeClass("hidden");
    $("#player-1-win").removeClass("hidden");
    $("#player-1-name").addClass("hidden");
  } else if (score2 >= 100) {
    $("#card-2").addClass("winner");
    $("#card-2").removeClass("active");
    $("#stop-turn").addClass("hidden");
    $("#restart").removeClass("hidden");
    $("#player-2-win").removeClass("hidden");
    $("#player-2-name").addClass("hidden");
  }
}

function turnRefresh() {
  if (player2.isTurn === true) {
    $("#card-2").addClass("active");
    $("#card-1").removeClass("active"); 
    console.log(2); 
  }
  if (player1.isTurn === true) {
    $("#card-1").addClass("active");
    $("#card-2").removeClass("active");
    console.log(1);  
  }
}

function scoreRefresh() {

  let scoreDisplay1 = $("#player-1-score");
  let scoreDisplay2 = $("#player-2-score");
  let turnDisplay = $("#current-turn-total");

  scoreDisplay1.text(player1.score);
  scoreDisplay2.text(player2.score);
  turnDisplay.text(thisTurnScore);
  
}



$(document).ready(function() {
  scoreRefresh();
  $("#dice-img").click(function() {
    let thisTurn = rollDice();
    $("#dice-img").attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_"+ thisTurn + "-512.png")
    scoreKeeper(thisTurn);
    scoreRefresh();
    turnRefresh();
  });
  $("#stop-turn").click(function() {
    addScore();
    changeActivePlayer();
    checkForFinish();
    scoreRefresh();
    turnRefresh();
  });
  $("#restart").click(function() {
    scoreRefresh();
    location.reload(true);
  });
})