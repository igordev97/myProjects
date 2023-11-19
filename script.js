'use strict';
const check = document.querySelector('.check');
const checkInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const randomNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', resetGame);
let highScore =
  JSON.parse(localStorage.getItem('highscore')) == null
    ? 0
    : JSON.parse(localStorage.getItem('highscore'));
let score = 20;
document.querySelector('.highscore').textContent = highScore;
function checkGame() {
  let inputValue = Number(checkInput.value);
  if (!inputValue) {
    message.textContent = `⛔ Please enter valild number`;
    return;
  } else if (inputValue < 1 || inputValue > 20) {
    message.textContent = `⛔ Please enter valild number 1-20`;
    return;
  } else {
    if (inputValue < randomNumber) {
      message.textContent = `⚠ To Low`;
      score--;
    } else if (inputValue > randomNumber) {
      message.textContent = `⚠ To High`;
      score--;
    } else {
      message.textContent = `🥇 YEEEEE, YOU GUESS NUMBER 🥇`;
      document.body.style.backgroundColor = 'green';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
      localStorage.setItem('highscore', JSON.stringify(highScore));
      document.querySelector('.number').textContent = randomNumber;
    }

    document.querySelector('.score').textContent = score;
  }
}

function resetGame() {
  location.reload();
}

check.addEventListener('click', checkGame);
