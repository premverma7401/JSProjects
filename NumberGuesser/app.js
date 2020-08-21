let min = 1,
  max = 10,
  winningNum = randomNumber(min, max),
  guessesleft = 3;

const game = document.querySelector('#game'),
  guessBtn = document.querySelector('#guess-btn'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
  console.log('d');
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please select number between ${min} and ${max}`, 'red');
  } else {
    if (guess === winningNum) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage('you are the winner buddy', 'green');
      guessInput.value = winningNum;
      guessBtn.value = 'Restart Game';
      guessBtn.className = 'play-again';
    } else {
      guessesleft -= 1;
      if (guessesleft === 0) {
        setMessage(`You Lost!!! Actual number is ${winningNum} `, 'red');
        guessBtn.disabled = true;
        guessInput.disabled = true;
        guessBtn.className = 'play-again';
      } else {
        setMessage(
          `${guessInput.value} is wrong , guess again and you have ${guessesleft} guess left.`,
          'red'
        );
        guessInput.value = '';
        guessBtn.value = 'Play Again';
      }
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
