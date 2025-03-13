const closeButton = document.querySelector('.backdrop-page__close');
const submitButton = document.querySelector(".backdrop-page__save")
const modal = document.querySelector('.backdrop-page');
function closeModal() {
    modal.classList.add('first-page-is-hidden');
}
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
submitButton.addEventListener('click', function() {
    modal.style.display = 'none';
});


const name = document.querySelector(".backdrop-page__input")
const userName = document.querySelector(".user-name")
const submitName = document.querySelector(".backdrop-page__save")
submitName.addEventListener("click", (event) => {
    userName.textContent = name.value
})