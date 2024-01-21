"use strict";

let secretNumber = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highscore = 0;

const displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

const changeBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

// 'check' button click functionality
document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  //   when there is no input
  if (!guess) {
    displayMessage("❌ Not a valid number");

    // when player input is correct
  } else if (guess === secretNumber) {
    displayMessage("💯 Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    // change background color of the body and the width of the secret Number
    changeBackgroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "💹 Too High" : "↘ Too Low");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🥴 You lost!");
      document.querySelector(".score").textContent = 0;
      changeBackgroundColor("red");
    }
  }
});

// reset button
document.querySelector(".reset").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing..");
  changeBackgroundColor("#222");
});
