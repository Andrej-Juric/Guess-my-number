'use strict';
// queryselector je u biti način na koji dohvaćamo class/ID
// da imamo ID, onda u ("#message")
// kad imamo class, onda pišemo (".message")
/*
console.log(document.querySelector('.message').textContent); //textContent ispiše što piše u tekstu

// selecting and manipulating elements

document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// handling click event

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    // promjena boje
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 👀' : 'Too low! 🤦‍♀️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You LOST the game! 😒';
      displayMessage('You LOST the game! 😒');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  // this is when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 👀';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST the game! 😒';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 🤦‍♀️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST the game! 😒';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

// AGAIN BUTTON
// ZADATAK 1. napravim event listener i dodavanje funkcije
document.querySelector('.again').addEventListener('click', function () {
  // ZADATAK 2 restore initial values of the score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // ZADATAK 4.
  // na klik se dogodi promjena boje ponovno na crnu
  // vrati se WIDTH na početnu postavku
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // ZADATAK 3.
  // message, number, score and guess restore na početnu
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});

// implemeting highscore
