const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let userWins = 0;
const computerVar = document.getElementById("computer-variant");

document.getElementById("rock-button").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("scissors-button").addEventListener("click", function () {
    playGame("scissors");
});

document.getElementById("paper-button").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("computer-variant").addEventListener("click", function () {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playGameWithComputer(computerChoice);
    computerVar.textContent = `Варіант комп’ютера: ${computerChoice}`; 
});

function playGame(userChoice) {
    document.getElementById("winOrLose").innerHTML = "";
}

function playGameWithComputer(computerChoice) {
    const userChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        userWins++;
        result = "Ви виграли!";
        document.getElementById("winOrLose").style.color = ("#08a207")
    } else if (userChoice === computerChoice) {
        result = "Нічия!";
        document.getElementById("winOrLose").style.color = ("#000")
    } else {
        computerWins++;
        result = "Комп'ютер виграв!";
        document.getElementById("winOrLose").style.color = ("#ff0000")
    }

    document.getElementById("winOrLose").innerHTML = result;
    document.getElementById("comp-score-text").innerHTML = computerWins;
    document.getElementById("user-score-text").innerHTML = userWins;
}