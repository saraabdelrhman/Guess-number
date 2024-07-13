let hidden = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector("#score").textContent = score;
let message = document.querySelector("#message");

document.querySelector("#checkBtn").addEventListener("click", function () {
  let guessInput = Number(document.querySelector("#guessInput").value);
  if (!guessInput) {
    message.textContent = "No number!";
    message.style.color = "red";
  } else if (guessInput === hidden) {
    message.textContent = "You have guessed right!";
    message.style.color = "green";
    document.querySelector(".number").textContent = hidden;
    document.querySelector("body").style.background = "green";

    if (score > highscore) {
      highscore = score; // Update highscore variable
      document.querySelector("#highscore").textContent = highscore; // Update highscore display
    }
  } else if (guessInput > hidden) {
    message.textContent = "Too high";
    message.style.color = "red";
    score--;
    document.querySelector("#score").textContent = score;
    if (score === 0) {
      message.textContent = "You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  } else if (guessInput < hidden) {
    message.textContent = "Too low";
    message.style.color = "red";
    score--;
    document.querySelector("#score").textContent = score;
    if (score === 0) {
      message.textContent = "You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector("#againBtn").addEventListener('click', function() {
  hidden = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("#score").textContent = score;
  message.textContent = "Start guessing...";
  message.style.color = "white";
  document.querySelector("body").style.background = "linear-gradient(to right, #d74e2b, #feb47b)";
  document.querySelector(".number").textContent = '?';
  document.querySelector("#guessInput").value = '';
});
