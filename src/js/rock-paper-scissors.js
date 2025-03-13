let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['камінь', 'ножиці', 'папір'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('computer-choice').textContent = "Варіант комп’ютера: " + computerChoice;

    let resultElement = document.getElementById('result');
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Нічия!';
        resultElement.className = "gray-text";
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        result = 'Ви виграли раунд!';
        resultElement.className = "green-text";
        userScore++;
    } else {
        result = 'Комп’ютер виграв раунд!';
        resultElement.className = "red-text";
        computerScore++;
    }

    resultElement.textContent = result;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}
