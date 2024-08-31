let numberToGuess;
let attempts;

function startGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feed').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('restartButton').style.display = 'none';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const feed = document.getElementById("feed");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feed.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess < numberToGuess) {
        feed.textContent = "Too low! Try again.";
    } else if (userGuess > numberToGuess) {
        feed.textContent = "Too high! Try again.";
    } else {
        feed.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessInput').disabled = true;
        document.getElementById('restartButton').style.display = 'block';
    }
}

function restartGame() {
    startGame();
}

startGame();