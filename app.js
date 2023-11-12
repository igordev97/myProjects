'use strict';

const animals = document.querySelectorAll('img');
for (let animal of animals) {
  animal.addEventListener('click', (e) => {
    const target_animal = e.target.getAttribute('data-song');
    const effect = new Audio(`./sounds/${target_animal}.mp3`);
    effect.play();
  });
}
