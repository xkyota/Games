const ball = document.querySelector('.ball');
const area = document.querySelector('.football-area');

area.addEventListener('click', function (event) {
    const areaRect = area.getBoundingClientRect(); 
    const ballSize = ball.offsetWidth; 

    let newX = event.clientX - areaRect.left - ballSize / 2 ;
    let newY = event.clientY - areaRect.top - ballSize / 2  ;

    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
    ball.style.transition = 'left 0.5s ease, top 0.5s ease'
});
