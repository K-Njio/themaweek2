console.log("kaas");


const bird = document.querySelector(".bird")
const gameDisplay = document.querySelector(".game-container")
const ground = document.querySelector(".ground")

let birdLeft = 220
let birdBottom = 100
let gravity = 2
let gameIsOver= false

function startGame() {
    birdBottom -= gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
}
let timerGame=setInterval(startGame, 20)

function jump() {
    if (birdBottom < 500) birdBottom += 50
    // bird.style.bottom=birdBottom + 'px'
}
//als je op de muis klik, dan kan je springen.
document.addEventListener('click', jump)

//hiermee kan je met alle knoopen op toetsenbord springen
// document.addEventListener('keydown', jump)

//hiermee kan je met spacebar springen
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jump(); // Roep hier je sprongfunctie aan
    }
});



function generateObstacle() {
    let obstacleLeft = 500    
    let randomHeight = Math.random() * 90
    let obstacleBottom = randomHeight

    const obstacle = document.createElement("div")
    obstacle.classList.add("obstacle")
    gameDisplay.appendChild(obstacle)
    obstacle.style.left = obstacleLeft + "px"
    obstacle.style.bottom = obstacleBottom + "px"

    function moveObstacle(){
        obstacleLeft -= 2
        obstacle.style.left = obstacleLeft + "px"

        if (obstacleLeft === -60) {
            obstacle.classList.remove("obstacle")
        }

        if (birdBottom === 0) {
            gameOver()
        }
    }

    let timerObstacle = setInterval(moveObstacle, 20)
    setTimeout(generateObstacle, 2500)
}

generateObstacle() 

function gameOver() {
    clearInterval(timerGame)
    console.log('game over')
    gameIsOver = true
    document.removeEventListener('click', jump)
    document.removeEventListener('space', jump)
}