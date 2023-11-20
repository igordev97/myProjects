'use strict';
let currentScore = 0;
let activePlayer = 0;
let isWinner = false;
let scores = [0, 0];

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
// Image dice select
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

// Game btn select
const btn_roll = document.querySelector('.btn--roll');
const btn_new_game = document.querySelector('.btn--new');
btn_new_game.addEventListener('click', () => {
  location.reload();
});
const btn_hold = document.querySelector('.btn--hold');
btn_hold.addEventListener('click', holdScore);

// When click on roll dice btn
btn_roll.addEventListener('click', diceRoll);

// Give Default value to both players
score0El.textContent = 0;
score1El.textContent = 0;

// Roll Dice function this function doesnt return value
function diceRoll() {
  if (!isWinner) {
    // Remove Hidden Class to dice el - Display Dice
    dice.classList.remove('hidden');
    //   Generate random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      //Add dice to current score
      currentScore += diceNumber;

      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch next player
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  }
}

function holdScore() {
  scores[activePlayer] += currentScore;
  if (scores[activePlayer] >= 100) {
    console.log(`ok`);
    alert(`Player ${activePlayer} is winner`);
    return;
  }
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}
