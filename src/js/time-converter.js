let calculatorInput = document.querySelector(".time-calculator__input");
let calcBtn = document.querySelector(".time-calculator__button");
let result = document.querySelector(".time-calculator__output");

calcBtn.addEventListener("click", function () {
    let seconds = parseInt(calculatorInput.value, 10);
    if (isNaN(seconds) || seconds < 0) {
        result.textContent = "Введіть коректне число.";
        return;
    }

    let days = Math.floor(seconds / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let leftSeconds = seconds % 60;

    result.textContent = `${days} дн. ${hours}:${minutes < 10 ? '0' + minutes : minutes}:${leftSeconds < 10 ? '0' + leftSeconds : leftSeconds}`;
});