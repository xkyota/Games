const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let isJumping = false;
let score = 0;
let gravity = 0.9;
let dinoBottom = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    gameContainer.style.display = "block";
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
    dinoBottom = 0;
    moveObstacle();
});

function jump() {
    if (isJumping) return;
    isJumping = true;
    let upInterval = setInterval(() => {
        if (dinoBottom >= 90) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (dinoBottom <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                dinoBottom -= 6;
                dino.style.bottom = dinoBottom + "px";
            }, 20);
        }
        dinoBottom += 7;
        dino.style.bottom = dinoBottom + "px";
    }, 20);
}

function control(e) {
    if (e.key === " " || e.key === "ArrowUp") {
        jump();
    }
}

document.addEventListener("keydown", control);

function moveObstacle() {
    let obstacleLeft = 800;
    obstacle.style.left = obstacleLeft + "px";

    let timerId = setInterval(() => {
        if (obstacleLeft < -20) {
            obstacleLeft = 720;
            score++;
            scoreDisplay.textContent = "Score: " + score;
        }

        // Проверка на столкновение
        if (obstacleLeft > 50 && obstacleLeft < 90 && dinoBottom < 40) {
            clearInterval(timerId);
            alert("Game Over! Your score: " + score);
            document.location.reload();
        }

        // Ускорение с увеличением счёта
        let speed = 5;
        if (score > 3) speed = 6;
        if (score > 7) speed = 7;
        if (score > 9) speed = 8;
        if (score > 14) speed = 9;
        if (score > 19) speed = 10;
        if (score > 24) speed = 11;
        if (score > 29) speed = 12;

        obstacleLeft -= speed;
        obstacle.style.left = obstacleLeft + "px";

    }, 20);
}