"use strict";
window.addEventListener("load", ready);

//globale variabler
let points = 0;
let lives = 3;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#try_again").addEventListener("click", startGame);
  document.querySelector("#try_again1").addEventListener("click", startGame);
}

function startGame() {
  console.log("JavaScript kører!");
  document.querySelector("#background_sound").play();
  resetTimer();
  resetLives();
  resetPoint();
  startTimer();

  // startskærm skjules
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  // start alle animationer
  document.querySelector("#good1_container").classList.add("flyingm1");
  document.querySelector("#good2_container").classList.add("flyingm2");
  document.querySelector("#good3_container").classList.add("flyingm3");
  document.querySelector("#good4_container").classList.add("flyingm4");
  document.querySelector("#bad1_container").classList.add("flyingm5");
  document.querySelector("#bad2_container").classList.add("flyingb1");
  document.querySelector("#bad3_container").classList.add("flyingb2");
  document.querySelector("#bad4_container").classList.add("flyingb3");

  // Registrer click
  document
    .querySelector("#good1_container")
    .addEventListener("click", clickGood1);
  document
    .querySelector("#good2_container")
    .addEventListener("click", clickGood2);
  document
    .querySelector("#good3_container")
    .addEventListener("click", clickGood3);
  document
    .querySelector("#good4_container")
    .addEventListener("click", clickGood4);
  document
    .querySelector("#bad1_container")
    .addEventListener("click", clickbad1);
  document
    .querySelector("#bad2_container")
    .addEventListener("click", clickbad2);
  document
    .querySelector("#bad3_container")
    .addEventListener("click", clickbad3);
  document
    .querySelector("#bad4_container")
    .addEventListener("click", clickbad4);
}

function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoint() {
  points = 0;
  displayPoints();
}

function clickGood1() {
  document
    .querySelector("#good1_container")
    .removeEventListener("click", clickGood1);
  document.querySelector("#good1_container").classList.add("paused");
  document.querySelector("#good1").classList.add("zoom_in");
  document
    .querySelector("#good1_container")
    .addEventListener("animationend", good1Gone);
  document.querySelector("#good_sound").currentTime = 0;
  document.querySelector("#good_sound").play();
  incrementPoints();
  displayPoints();
}

function clickGood2() {
  document
    .querySelector("#good2_container")
    .removeEventListener("click", clickGood2);
  document.querySelector("#good2_container").classList.add("paused");
  document.querySelector("#good2").classList.add("zoom_in");
  document
    .querySelector("#good2_container")
    .addEventListener("animationend", good2Gone);
  document.querySelector("#good_sound").currentTime = 0;
  document.querySelector("#good_sound").play();
  incrementPoints();
  displayPoints();
}

function clickGood3() {
  document
    .querySelector("#good3_container")
    .removeEventListener("click", clickGood3);
  document.querySelector("#good3_container").classList.add("paused");
  document.querySelector("#good3").classList.add("zoom_in");
  document
    .querySelector("#good3_container")
    .addEventListener("animationend", good3Gone);
  document.querySelector("#good_sound").currentTime = 0;
  document.querySelector("#good_sound").play();
  incrementPoints();
  displayPoints();
}

function clickGood4() {
  document
    .querySelector("#good4_container")
    .removeEventListener("click", clickGood4);
  document.querySelector("#good4_container").classList.add("paused");
  document.querySelector("#good4").classList.add("zoom_in");
  document
    .querySelector("#good4_container")
    .addEventListener("animationend", good4Gone);
  document.querySelector("#good_sound").currentTime = 0;
  document.querySelector("#good_sound").play();
  incrementPoints();
  displayPoints();
}

function clickbad1() {
  document
    .querySelector("#bad1_container")
    .removeEventListener("click", clickbad1);
  document.querySelector("#bad1_container").classList.add("paused");
  document.querySelector("#bad1").classList.add("zoom_out");
  document
    .querySelector("#bad1_container")
    .addEventListener("animationend", bad1Gone);
  document.querySelector("#bad_sound").currentTime = 0;
  document.querySelector("#bad_sound").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

function clickbad2() {
  document
    .querySelector("#bad2_container")
    .removeEventListener("click", clickbad2);
  document.querySelector("#bad2_container").classList.add("paused");
  document.querySelector("#bad2").classList.add("zoom_out");
  document
    .querySelector("#bad2_container")
    .addEventListener("animationend", bad2Gone);
  document.querySelector("#bad_sound").currentTime = 0;
  document.querySelector("#bad_sound").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

function clickbad3() {
  document
    .querySelector("#bad3_container")
    .removeEventListener("click", clickbad3);
  document.querySelector("#bad3_container").classList.add("paused");
  document.querySelector("#bad3").classList.add("zoom_out");
  document
    .querySelector("#bad3_container")
    .addEventListener("animationend", bad3Gone);
  document.querySelector("#bad_sound").currentTime = 0;
  document.querySelector("#bad_sound").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

function clickbad4() {
  document
    .querySelector("#bad4_container")
    .removeEventListener("click", clickbad4);
  document.querySelector("#bad4_container").classList.add("paused");
  document.querySelector("#bad4").classList.add("zoom_out");
  document
    .querySelector("#bad4_container")
    .addEventListener("animationend", bad4Gone);
  document.querySelector("#bad_sound").currentTime = 0;
  document.querySelector("#bad_sound").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

// pint og liv

function decrementLives() {
  if (lives <= 1) {
    console.log("lost");
    displaygameOver();
  }
  displayDecrementedLives();
  lives -= 1;
}

function displayDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.remove("pulse-heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function incrementPoints() {
  points += 1;
  console.log(points);
  displayPoints();
  if (points >= 10) {
    levelComplete();
  }
}
function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#point_count").textContent = points;
}

function decrementPoints() {
  points -= 1;
  console.log(points);
  displayPoints();
}

// fjern animationer og gør det muligt at klikke på dem igen

function good1Gone() {
  document
    .querySelector("#good1_container")
    .removeEventListener("animationend", good1Gone);
  document.querySelector("#good1").classList.remove("zoom_in");
  document.querySelector("#good1_container").classList.remove("paused");
  document.querySelector("#good1_container").classList.remove("flyingm1");
  document.querySelector("#good1_container").offsetWidth;
  document.querySelector("#good1_container").classList.add("flyingm1");
  document
    .querySelector("#good1_container")
    .addEventListener("click", clickGood1);
}

function good2Gone() {
  document
    .querySelector("#good2_container")
    .removeEventListener("animationend", good2Gone);
  document.querySelector("#good2").classList.remove("zoom_in");
  document.querySelector("#good2_container").classList.remove("paused");
  document.querySelector("#good2_container").classList.remove("flyingm2");
  document.querySelector("#good2_container").offsetWidth;
  document.querySelector("#good2_container").classList.add("flyingm2");
  document
    .querySelector("#good2_container")
    .addEventListener("click", clickGood2);
}

function good3Gone() {
  document
    .querySelector("#good3_container")
    .removeEventListener("animationend", good3Gone);
  document.querySelector("#good3").classList.remove("zoom_in");
  document.querySelector("#good3_container").classList.remove("paused");
  document.querySelector("#good3_container").classList.remove("flyingm3");
  document.querySelector("#good3_container").offsetWidth;
  document.querySelector("#good3_container").classList.add("flyingm3");
  document
    .querySelector("#good3_container")
    .addEventListener("click", clickgood3);
}

function good4Gone() {
  document
    .querySelector("#good4_container")
    .removeEventListener("animationend", good4Gone);
  document.querySelector("#good4").classList.remove("zoom_in");
  document.querySelector("#good4_container").classList.remove("paused");
  document.querySelector("#good4_container").classList.remove("flyingm4");
  document.querySelector("#good4_container").offsetWidth;
  document.querySelector("#good4_container").classList.add("flyingm4");
  document
    .querySelector("#good4_container")
    .addEventListener("click", clickGood4);
}

function bad1Gone() {
  document
    .querySelector("#bad1_container")
    .removeEventListener("animationend", bad1Gone);
  document.querySelector("#bad1").classList.remove("zoom_out");
  document.querySelector("#bad1_container").classList.remove("paused");
  document.querySelector("#bad1_container").classList.remove("flyingm5");
  document.querySelector("#bad1_container").offsetWidth;
  document.querySelector("#bad1_container").classList.add("flyingm5");
  document
    .querySelector("#bad1_container")
    .addEventListener("click", clickbad1);
}

function bad2Gone() {
  document
    .querySelector("#bad2_container")
    .removeEventListener("animationend", bad2Gone);
  document.querySelector("#bad2").classList.remove("zoom_out");
  document.querySelector("#bad2_container").classList.remove("paused");
  document.querySelector("#bad2_container").classList.remove("flyingb1");
  document.querySelector("#bad2_container").offsetWidth;
  document.querySelector("#bad2_container").classList.add("flyingb1");
  document
    .querySelector("#bad2_container")
    .addEventListener("click", clickbad2);
}

function bad3Gone() {
  document
    .querySelector("#bad3_container")
    .removeEventListener("animationend", bad3Gone);
  document.querySelector("#bad3").classList.remove("zoom_out");
  document.querySelector("#bad3_container").classList.remove("paused");
  document.querySelector("#bad3_container").classList.remove("flyingb2");
  document.querySelector("#bad3_container").offsetWidth;
  document.querySelector("#bad3_container").classList.add("flyingb2");
  document
    .querySelector("#bad3_container")
    .addEventListener("click", clickbad3);
}

function bad4Gone() {
  document
    .querySelector("#bad4_container")
    .removeEventListener("animationend", bad4Gone);
  document.querySelector("#bad4").classList.remove("zoom_out");
  document.querySelector("#bad4_container").classList.remove("paused");
  document.querySelector("#bad4_container").classList.remove("flyingb3");
  document.querySelector("#bad4_container").offsetWidth;
  document.querySelector("#bad4_container").classList.add("flyingb3");
  document
    .querySelector("#bad4_container")
    .addEventListener("click", clickbad4);
}

function displaygameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
}

function startTimer() {
  document.querySelector("#time").classList.add("shrink");
  document.querySelector("#time").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Time is up");

  if (points >= 10) {
    levelComplete();
  } else {
    displaygameOver();
  }
}
function resetTimer() {
  document.querySelector("#time").classList.remove("shrink");
  document.querySelector("#time").offsetWidth;
}
function stopGame() {
  document.querySelector("#good1_container").removeEventListener("click", clickGood1);
  document.querySelector("#good2_container").removeEventListener("click", clickGood2);
  document.querySelector("#good3_container").removeEventListener("click", clickGood3);
  document.querySelector("#good4_container").removeEventListener("click", clickGood4);
  document.querySelector("#bad1_container").removeEventListener("click", clickbad1);
  document.querySelector("#bad2_container").removeEventListener("click", clickbad2);
  document.querySelector("#bad3_container").removeEventListener("click", clickbad3);
  document.querySelector("#bad4_container").removeEventListener("click", clickbad4);

  document.querySelector("#good1_container").removeEventListener("animationend", good1Gone);
  document.querySelector("#good2_container").removeEventListener("animationend", good2Gone);
  document.querySelector("#good3_container").removeEventListener("animationend", good3Gone);
  document.querySelector("#good4_container").removeEventListener("animationend", good4Gone);
  document.querySelector("#bad1_container").removeEventListener("animationend", bad1Gone);
  document.querySelector("#bad2_container").removeEventListener("animationend", bad2Gone);
  document.querySelector("#bad3_container").removeEventListener("animationend", bad3Gone);
  document.querySelector("#bad4_container").removeEventListener("animationend", bad4Gone);



  document.querySelector("#good1_container").classList.add("paused");
  document.querySelector("#good2_container").classList.add("paused");
  document.querySelector("#good3_container").classList.add("paused");
  document.querySelector("#good4_container").classList.add("paused");
  document.querySelector("#bad1_container").classList.add("paused");
  document.querySelector("#bad2_container").classList.add("paused");
  document.querySelector("#bad3_container").classList.add("paused");
  document.querySelector("#bad4_container").classList.add("paused");


  document.querySelector("#background_sound").pause();
}

//TILFØJ DISPLAY GAME OVER 

