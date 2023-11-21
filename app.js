let currentPlay = 'x';
let turnStep = 0;
let gameData = ['', '', '', '', '', '', '', '', ''];
let isWinner = false;
let score_player_x = 0;
let score_player_o = 0;
const fields = document.querySelectorAll('.box');
let draw_score = 0;

for (let field of fields) {
  field.addEventListener('click', function (e) {
    if (!isWinner) {
      e.target.textContent = currentPlay;
      const click = new Audio('./click.wav');
      click.play();
      gameData[field.id] = currentPlay;
      checkWinner(gameData);
      console.log(gameData);
      currentPlay = currentPlay === 'x' ? 'o' : 'x';
      console.log(`${field.id}`);
      turnStep++;
      if (turnStep == 9) {
        draw_score++;
        document.querySelector('#display').textContent = 'Draw';
        document.querySelector('.draw').textContent = draw_score;
        isWinner = true;
        const draw = new Audio('./draw.mp3');
        draw.play();
      }
    }
  });
}

function checkWinner(data) {
  if (
    (data[0] == 'x' && data[1] == 'x' && data[2] == 'x') ||
    (data[3] == 'x' && data[4] == 'x' && data[5] == 'x') ||
    (data[6] == 'x' && data[7] == 'x' && data[8] == 'x') ||
    (data[0] == 'x' && data[3] == 'x' && data[6] == 'x') ||
    (data[1] == 'x' && data[4] == 'x' && data[7] == 'x') ||
    (data[2] == 'x' && data[5] == 'x' && data[8] == 'x') ||
    (data[0] == 'x' && data[4] == 'x' && data[8] == 'x') ||
    (data[2] == 'x' && data[4] == 'x' && data[6] == 'x')
  ) {
    document.querySelector('#display').textContent = 'Player X is Winner';
    score_player_x++;
    document.querySelector('.x-score').textContent = score_player_x;
    isWinner = true;
    const win = new Audio('./win.wav');
    win.play();
  } else if (
    (data[0] == 'o' && data[1] == 'o' && data[2] == 'o') ||
    (data[3] == 'o' && data[4] == 'o' && data[5] == 'o') ||
    (data[6] == 'o' && data[7] == 'o' && data[8] == 'o') ||
    (data[0] == 'o' && data[3] == 'o' && data[6] == 'o') ||
    (data[1] == 'o' && data[4] == 'o' && data[7] == 'o') ||
    (data[2] == 'o' && data[5] == 'o' && data[8] == 'o') ||
    (data[0] == 'o' && data[4] == 'o' && data[8] == 'o') ||
    (data[2] == 'o' && data[4] == 'o' && data[6] == 'o')
  ) {
    document.querySelector('#display').textContent = 'Player O is Winner';
    isWinner = true;
    score_player_o++;
    document.querySelector('.o-score').textContent = score_player_o;
    const win = new Audio('./win.wav');
    win.play();
  } else {
    return;
  }
}

document.querySelector('#play').addEventListener('click', newGame);

function newGame() {
  for (let field of fields) {
    isWinner = false;
    gameData = ['', '', '', '', '', '', '', '', ''];
    document.querySelector('#display').textContent = 'Play Now';
    turnStep = 0;
    field.textContent = '';
    const reset = new Audio('./reset.wav');
    reset.play();
  }
}
