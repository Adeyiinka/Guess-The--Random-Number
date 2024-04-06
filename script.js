'use strict';
// Setting initial score
let score = 20;

// Generating the random secret number
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = randomNumber();

// Setting initial highscore
let highscore = 0;

// function to take two parameters 'elementLocator' and a 'message' to display
function displayText(elementLocator, message) {
  document.querySelector(elementLocator).textContent = message;
}

// On Click event listener for Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If the guess is empty or 0
  if (!guess) {
    document.querySelector('body').style.backgroundColor = '#F00';
    displayText('.message', 'Input a Whole Number');
  }

  // if guess === secretNumber | Player wins
  else if (guess === secretNumber) {
    displayText('.message', 'Correct Number, You Won');
    displayText('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // To update the highscore
    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }

    // When player guess !== secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayText(
        '.message',
        guess > secretNumber
          ? 'Guess Is Higher Than The Secret Number'
          : 'Guess Is Lower Than The Secret Number'
      );
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', 'You lost the game');
      displayText('.score', 0);
    }
  }
});

// To Reset the page to default on "Again" click event listener
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayText('.score', score);
  secretNumber = randomNumber();
  displayText('.message', 'Start Guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayText('.number', '?');
});
