const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores, currentScore, activPlayer, playing;

// Switch player
const switchPlayer = () => {
  document.getElementById(`current--${activPlayer}`).textContent = 0;
  activPlayer = activPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activPlayer = 0;
  playing = true; // State variabel

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

btnRoll.addEventListener('click', () => {
  if (playing) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display randomNumber
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      // Add dice to current score
      currentScore += randomNumber;
      document.getElementById(`current--${activPlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // Add current score to activPlayer's scores
    // scores[1] = scores[1] + currentScore
    scores[activPlayer] += currentScore;
    document.getElementById(`score--${activPlayer}`).textContent =
      scores[activPlayer];
    // Check if player score's is >= 100
    if (scores[activPlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      // Finish the game
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener(
  'click',
  init

  //* ERROR Det funkar halvt
  //   scores[activPlayer] = 0;
  //   score0El.textContent = 0;
  //   score1El.textContent = 0;
  //   playing = true;
  //   document
  //     .querySelector(`.player--${activPlayer}`)
  //     .classList.remove('player--winner');
  //   switchPlayer();
);
