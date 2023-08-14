'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const styleWindow = (color, width) => {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no input or incorrect input
  if (!guess || guess > 20) {
    displayMessage('Please, input number between 1 ant 20 to start game !');
    document.querySelector('.guess').value = '';

    //When player wins
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMessage('Correct Number !!!');
    if (score > highScore) {
      setScore(score);
      highScore = score;
    }
    styleWindow('#60b347', '30rem');
  }

  //When guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('Game over (((');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //   console.log(number);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  setScore(score);
  styleWindow('#222', '15rem');
  document.querySelector('.number').textContent = '?';
});
