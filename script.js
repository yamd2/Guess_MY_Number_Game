'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number !  ';
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector('.message').textContent =
      ' Congratulations ! Correct Number 🎉 !  ';

    document.querySelector('body').style.backgroundColor = ' #60b347;';
    document.querySelector('.number').style;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too high!   📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' You Lost The Game   💣';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too Low!   📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' You Lost The Game   💣';
      document.querySelector('.score').textContent = 0;
    }
  }
});
