document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("number");
    const button = document.getElementById("guess-button");
    const result = document.getElementById("resultat");

    button.addEventListener("click", (event) => {
        event.preventDefault();

        const computerChoice = Math.floor(Math.random() * 10) + 1; 
        const userChoice = parseInt(input.value, 10);

        if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= 10) {
            if (userChoice === computerChoice) {
                result.innerHTML = `Вітаю, ви вгадали число! ${computerChoice}`;
                result.className = "green-paragraph";
            } else {
                result.innerHTML = `Ви програли, комп'ютер загадав ${computerChoice}.`;
                result.className = "red-paragraph";
            }
        } else {
            result.innerHTML = "Введіть число від 1 до 10!";
            result.className = "grey-paragraph";
        }

        input.value = "";
    });
});
