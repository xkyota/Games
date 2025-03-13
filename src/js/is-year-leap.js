const checkYearInput = document.querySelector('.input__leap')
let yesNoLeap = document.getElementById('yes-no-leap');
document.querySelector('.input-but__leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap-input').value;

    if (userInput) {
        if (+userInput > 2025) { 
            checkYearInput.value = ""
            yesNoLeap.textContent = "Не обманюйте будь-ласка :(";
            yesNoLeap.style.color = "#990000";
        }
        else if(userInput % 4 === 0) {
            checkYearInput.value = ""
            yesNoLeap.textContent = "Ви народились у високосний рік";
            yesNoLeap.style.color = "#039900";
        } else {
            checkYearInput.value = ""
            yesNoLeap.textContent = "Ви не народились у високосний рік";
            yesNoLeap.style.color = "#990000";
        }
        yesNoLeap.style.transition = "all 500ms ease";
    } else {
        checkYearInput.value = ""
        yesNoLeap.textContent = "Будь ласка, введіть рік народження";
        yesNoLeap.style.color = "#000000";
    }
    yesNoLeap.style.opacity = "1";
});