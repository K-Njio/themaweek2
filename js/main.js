console.log("kaas");
//variabelen.
const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");
const ground = document.querySelector(".ground");

let birdLeft = 220;
let birdBottom = 100;
let gravity = 2;
let gameIsOver = false;
let gap = 460;
let score = 0;

function startGame() {
    birdBottom -= gravity
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
}
//elke 20milisec voert het start game uit.
let timerGame = setInterval(startGame, 20)

function jump() {
    if (birdBottom < 500) birdBottom += 50;
    // bird.style.bottom=birdBottom + 'px'
}
//als je op de muis klik, dan kan je springen.
document.addEventListener('click', jump);

//hiermee kan je met alle knoopen op toetsenbord springen
// document.addEventListener('keydown', jump)

//hiermee kan je met spacebar springen
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jump(); // Roep hier je sprongfunctie aan
    }
});
//hiermee genereer je obstakels.
function generateObstacle() {
    let obstacleLeft = 500; //punt waar het begint.
    let randomHeight = Math.random() * 90; //willekeurige hoogte van de buis, zodat je niet de hele tijd in een rechte lijn vliegt.
    let obstacleBottom = randomHeight;

    //je creëert obstakels en dat gaat in een div element.
    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");
    if (!gameIsOver) {
        obstacle.classList.add("obstacle");
        topObstacle.classList.add("top-obstacle");
    }
    //de obstakels zet je in de game-container.
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
    topObstacle.style.bottom = obstacleBottom + gap + "px";

    //deze functie laat het obstakel bewegen.
    function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";

        //als het obstakel gelijk is aan 0 dus begin van het scherm, dan 
        if (obstacleLeft === 0) {
            //met clearinterval stopt de tijd
            clearInterval(timerObstacle);
            //haal het obstakel weg. Het is kind, want daarvoor hadden we append(toevoegen)child gebruikt.
            gameDisplay.removeChild(obstacle);
            gameDisplay.removeChild(topObstacle);
        }
        //waar de vogel de paal aanraakt gaat ie af. nummers erachter zijn de bijpassende hoogtes, zodat de vogel niet afgaat.
        if (
            obstacleLeft > 200 && obstacleLeft < 274 && birdLeft === 220 &&
            (birdBottom < obstacleBottom + 178 || birdBottom > obstacleBottom + gap - 205) ||
            birdBottom === 0) {
            gameOver()
            clearInterval(timerObstacle)
        }
    }
    let timerObstacle = setInterval(moveObstacle, 20);
    //setTimeout is 3,5 sec wachten voordat die nieuwe obstakels genereert.
    if (!gameIsOver) { setTimeout(generateObstacle, 3500) }
}

generateObstacle()

//wanneer het game over is, dan stopt de vogel met vliegen en je kan geen spatie of met je muis klikken om verder te spelen.
function gameOver() {
    clearInterval(timerGame);
    console.log('game over');
    gameIsOver = true;
    document.removeEventListener('click', jump);
    document.removeEventListener('space', jump);
}

//er moet nog een score worden toegevoegd en overlay,zodat je niet meteen met het spel begint. 
//Ik had daar geen tijd voor, omdat ik druk bezig was met de obstakels werkend maken.
//wanneer ik tijd heb ga ik dat verder bijwerken.