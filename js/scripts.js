//Business Logic
function Game() {
  this.players = {};
  this.currentId = 0;
}
Game.prototype.addPlayer = function () {
  this.currentId += 1;
  return this.currentId;
}

function rollDice() {
    const num =  Math.floor(Math.random() * 6);
    return num + 1;
}

function Player(id, name) {
  this.score = 0;
  this.id = id;
  this.isTurn = false;
  this.name = name;
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
let playerGame = new Game();
let player2 = new Player(2);
let thisTurnScore = 0;
// player1.score = 98;

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
    $("#game-board").slideUp(1000);
    $("#result-board").slideDown(1000);
    $("#winner-card").text("Player 1 Wins!");
  } else if (score2 >= 100) {
    $("#game-board").slideUp(1000);
    $("#result-board").slideDown(1000);
    $("#winner-card").text("Player 2 Wins!");
  }
}

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
  
}

function attachContactListenersForDiceImgs(id) {
  let diceImgID = "#dice-img-" + id
  $(diceImgID).on("click", function () {
    let thisTurn = rollDice();
    $(diceImgID).attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_" + thisTurn + "-256.png")
    if (scoreKeeper(thisTurn) === 0) {
      $("#current-turn-added").hide();
      $("#dice-container").slideUp(500, function () {
        $("#tough-luck").slideDown(500, function () {
          $("#tough-luck").slideUp(2000);
          $("#dice-container").slideDown(2000);
        });
      });
      $("#dice-img-1").attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-256.png");
      $("#dice-img-2").attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-256.png");
    } else {
      
      $("#current-turn-added").fadeIn(250);
      $("#current-turn-added").text(" +" + thisTurn);
      $("#current-turn-added").fadeOut(500);
    }

    scoreRefresh();
    turnRefresh();
  })
}


$(document).ready(function() {
  scoreRefresh();
  let diceAmount;
  $("label#play-1-dice-img").click(function() {
    $("#play-1-dice-img").css("box-shadow","rgb(0 0 0) 0px 0px 24px");
    $("#play-1-dice-img").css("background-color","#fff");
    $("#play-2-dice-img").css("box-shadow","rgb(0 0 0 / 55%) 0px 0px 0px");
    $("#play-2-dice-img").css("background-color","#d1faff");
    $("#dice-container").html("<img id=\"dice-img-1\" src=\"https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-256.png\" alt=\"Photo of a dice\">");
    attachContactListenersForDiceImgs(1)
    $("#play-game").slideDown(200);
    diceAmount = 1;
  });
  $("label#play-2-dice-img").click(function() {
    $("#play-2-dice-img").css("box-shadow","rgb(0 0 0) 0px 0px 24px");
    $("#play-2-dice-img").css("background-color","#fff");
    $("#play-1-dice-img").css("box-shadow","rgb(0 0 0 / 55%) 0px 0px 0px");
    $("#play-1-dice-img").css("background-color","#d1faff");
    $("#dice-container").html("<img id=\"dice-img-1\" src=\"https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-256.png\" alt=\"Photo of a dice\"><img id=\"dice-img-2\" src=\"https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-256.png\" alt=\"Photo of a dice\">");
    attachContactListenersForDiceImgs(1);
    attachContactListenersForDiceImgs(2);
    $("#play-game").slideDown(200);
    diceAmount = 2;
  });

  $("#play-game").click(function () {
    $("#start-board").hide(500, function () {
      $("#game-board").slideDown(1000);
      let playerGame = new Game();
      playerGame.diceCount = diceAmount;
      
    });
  });

  $("#stop-turn").click(function() {
    $("#dice-img-1").attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png");
    $("#dice-img-2").attr("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png")
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