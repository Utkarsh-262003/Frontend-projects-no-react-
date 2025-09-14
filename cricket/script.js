// initialize scores from localStorage (or default to 0)
let userScore = Number(localStorage.getItem('userScore')) || 0;
let compScore = Number(localStorage.getItem('compScore')) || 0;

function updateScoreDisplay() {
  document.getElementById('score').textContent = `You: ${userScore} | Computer: ${compScore}`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateScoreDisplay();

  // attach click handlers to the three buttons
  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => playGame(btn.dataset.move));
  });

  // reset button
  document.getElementById('resetBtn').addEventListener('click', resetGame);
});

function playGame(userChoice) {
  const choices = ['bat', 'ball', 'wicket'];
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  if (userChoice === compChoice) {
    result = "It's a Draw! 🤝";
  } else if (
    (userChoice === 'bat' && compChoice === 'ball') ||
    (userChoice === 'ball' && compChoice === 'wicket') ||
    (userChoice === 'wicket' && compChoice === 'bat')
  ) {
    result = `You Win! 🎉 (You: ${userChoice} | Computer: ${compChoice})`;
    userScore++;
  } else {
    result = `You Lose! 😢 (You: ${userChoice} | Computer: ${compChoice})`;
    compScore++;
  }

  // persist scores
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('compScore', compScore);

  // update UI
  document.getElementById('result').textContent = result;
  updateScoreDisplay();
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('compScore', compScore);
  document.getElementById('result').textContent = 'Game Reset!';
  updateScoreDisplay();
}
