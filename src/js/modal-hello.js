const closeButton = document.querySelector('.backdrop-page__close');
const submitButton = document.querySelector(".backdrop-page__save");
const modal = document.querySelector('.backdrop-page');

const userInput = document.querySelector(".backdrop-page__input");
const userName = document.getElementById("user-name"); 
const submitName = document.querySelector(".backdrop-page__save");

submitName.addEventListener("click", (event) => {
    event.preventDefault(); 
    userName.textContent = ", "  + userInput.value.trim(); 
    modal.style.display = 'none'; 
}); 

closeButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    modal.style.display = 'none';
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    modal.style.display = 'none';
});
modal.style.display = 'flex';
