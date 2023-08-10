const gameContainer = document.querySelector('.game-container');
const dinosaur = document.querySelector('.dinosaur');
const cactus = document.querySelector('.cactus');
const scoreSpan = document.getElementById('score');

let jumping = false;
let isRunning = true;
let score = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (!jumping) {
      jumping = true;
      jumpDinosaur();
    }
  }
});

function jumpDinosaur() {
  let position = 0;
  const jumpInterval = setInterval(() => {
    if (position === 100) {
      clearInterval(jumpInterval);
      setTimeout(() => {
        jumping = false;
      }, 150);
    } else {
      position += 10;
      dinosaur.style.bottom = position + 'px';
    }
  }, 20);
}

function moveDinosaur() {
  const runInterval = setInterval(() => {
    if (isRunning) {
      const currentLeft = parseInt(getComputedStyle(dinosaur).left);
      dinosaur.style.left = currentLeft + 5 + 'px';
      checkCollision();
    }
  }, 30);
}

function checkCollision() {
  const dinoPos = dinosaur.getBoundingClientRect();
  const cactusPos = cactus.getBoundingClientRect();

  if (
    dinoPos.bottom >= cactusPos.top &&
    dinoPos.right >= cactusPos.left &&
    dinoPos.left <= cactusPos.right
  ) {
    clearInterval(runInterval);
    isRunning = false;
    cactus.style.display = 'none'; // Menghilangkan kaktus
    alert('Game Over! Your score: ' + score);
    location.reload();
  }
}

function increaseScore() {
  score++;
  scoreSpan.textContent = score;
}

moveDinosaur();

setInterval(() => {
  increaseScore();
}, 1000); // Meningkatkan skor setiap detik
