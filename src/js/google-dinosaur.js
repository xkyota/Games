document.addEventListener("DOMContentLoaded", function () {
    const dino = document.getElementById("dino");
    const startButton = document.getElementById("start-btn");
    const gameContainer = document.getElementById("game-container");
    const obstacle = document.getElementById("obstacle");
    const scoreDisplay = document.getElementById("score");
    let isJumping = false;
    let dinoBottom = 0;
    let score = 0;

    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        gameContainer.style.display = "block";
        score = 0;
        scoreDisplay.textContent = "00000";
        dinoBottom = 0;
        dino.style.bottom = dinoBottom + "px";
        moveObstacle();
        startScoreCounter();
    });

    function startScoreCounter() {
        setInterval(() => {
            score++;
            scoreDisplay.textContent = score.toString().padStart(5, '0');
        }, 50);
    }

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let upInterval = setInterval(() => {
            if (dinoBottom >= 90) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (dinoBottom <= 0) {
                        dinoBottom = 0;
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                    dinoBottom = Math.max(0, dinoBottom - 6);
                    dino.style.bottom = dinoBottom + "px";
                }, 20);
            }
            dinoBottom += 7;
            dino.style.bottom = dinoBottom + "px";
        }, 20);
    }

    function control(e) {
        if (e.key === " " || e.key === "ArrowUp") {
            e.preventDefault();
            jump();
        }
    }

    document.addEventListener("keydown", control);
    document.addEventListener("click", jump);

    function moveObstacle() {
        let obstacleLeft = 800;
        obstacle.style.left = obstacleLeft + "px";

        let timerId = setInterval(() => {
            if (obstacleLeft < -20) {
                obstacleLeft = 720;
            }

            if (obstacleLeft > 50 && obstacleLeft < 90 && dinoBottom < 40) {
                clearInterval(timerId);
                alert("Game Over! Your score: " + score);
                document.location.reload();
            }

            let speed = 5;
            if (score > 100) speed = 7;
            if (score > 200) speed = 8;
            if (score > 300) speed = 9;
            if (score > 400) speed = 10;
            if (score > 500) speed = 11;
            if (score > 600) speed = 12;
            if (score > 700) speed = 15;

            obstacleLeft -= speed;
            obstacle.style.left = obstacleLeft + "px";
        }, 20);
    }
});
