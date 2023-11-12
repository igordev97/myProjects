'use strict';

let max_score = 0;
let player_1_status = false;
let player_2_status = false;
let player_1_score = 0;
let player_2_score = 0;
max_score = Number(prompt('Choose your Max Score from 1-10'));

const start_btn = document.querySelector('#start-btn');
const items = document.querySelectorAll('.box');
const playerDisplay = document.querySelector('#player-display');
playerDisplay.innerText = 'Player One Pick';
const player_1 = document.querySelector('.player-1');
const player_2 = document.querySelector('.player-2');

for (let item of items) {
  item.addEventListener('click', function (e) {
    if (player_1_status == false) {
      e.target.classList.add('selected');
      player_1_status = e.target.getAttribute('data-sign');
      e.target.classList.remove('selected');
      playerDisplay.innerText = 'Player Two Pick Now';
    } else if (player_2_status == false) {
      player_2_status = e.target.getAttribute('data-sign');
      e.target.classList.remove('selected');
      playerDisplay.innerText = 'Please press Start Game Button';
    } else {
      alert('Please Press Start Game Button');
    }
  });
}

function startGame() {
  if (player_1_status == false) {
    alert('⚠⚠⚠⚠⚠ PLAYER 1 NEED TO PICK ⚠⚠⚠⚠⚠⚠');
  } else if (player_2_status == false) {
    alert('⚠⚠⚠⚠⚠ PLAYER 2 NEED TO PICK ⚠⚠⚠⚠⚠⚠');
  } else {
    if (player_1_status == player_2_status) {
      alert('DRAW');
    } else if (player_1_status == 'scissor' && player_2_status == 'peaper') {
      alert('🏆🏆🏆🏆 PLAYER 1 WIIIN !!!! 🏆🏆🏆🏆');
      player_1_score++;
      player_1.innerText = `${player_1_score}`;
    } else if (player_1_status == 'peaper' && player_2_status == 'rock') {
      alert('🏆🏆🏆🏆 PLAYER 1 WIIIN !!!! 🏆🏆🏆🏆');
      player_1_score++;
      player_1.innerText = `${player_1_score}`;
    } else if (player_1_status == 'rock' && player_2_status == 'scissor') {
      alert('🏆🏆🏆🏆 PLAYER 1 WIIIN !!!! 🏆🏆🏆🏆');
      player_1_score++;
      player_1.innerText = `${player_1_score}`;
    } else {
      alert('🏆🏆🏆🏆 PLAYER 2 WIIIN !!!! 🏆🏆🏆🏆');
      player_2_score++;
      player_2.innerText = `${player_2_score}`;
    }

    checkWinner();
  }
}

function resetGame() {
  player_1_status = false;
  player_2_status = false;
  playerDisplay.innerText = 'Player One Pick';
}

function checkWinner() {
  if (player_1_score == max_score) {
    alert('🏆🏆🏆🏆 PLAYER 1 IS WINNER !!!! 🏆🏆🏆🏆');
    location.reload();
  } else if (player_2_score == max_score) {
    alert('🏆🏆🏆🏆 PLAYER 2 IS WINNER !!!! 🏆🏆🏆🏆');
    location.reload();
  } else {
    resetGame();
  }
}
start_btn.onclick = startGame;
