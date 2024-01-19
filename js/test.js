// document.addEventListener('DOMContentLoaded', () => {
//     const bird = document.querySelector('.bird')
//     const gameDisplay = document.querySelector('.game-container')
//     const ground = document.querySelector('.ground')
    
//     let birdLeft = 180
//     let birdBottom =220
//     let grativy=2
    
    
//     function startGame() {
//         birdBottom -=grativy
//         bird.style.bottom = birdBottom + 'px'
//         bird.style.left = birdLeft + 'px'
//     }
//     //om het object te blijven laten vallen.
//     // interval zorgt voor de snelheid dat het opbject
//     //interval gaat door een functie en tijd.
//     let timer= setInterval(startGame, 20) 
    
//     function jump(){
//        if (birdBottom <500) birdBottom+=50
//         // bird.style.bottom=birdBottom + 'px'
//     }
//     //als je op de muis klik, dan kan je springen.
//     document.addEventListener('click', jump)
    
//     //hiermee kan je met alle knoopen op toetsenbord springen
//     // document.addEventListener('keydown', jump)
    
//     //hiermee kan je met spacebar springen
//     document.addEventListener('keydown', function(event) {
//         if (event.code === 'Space') {
//           jump(); // Roep hier je sprongfunctie aan
//         }
//       });
    
    
//     function obstacleGenerator(){
//         //je maakt een div
//     const obstacle= document.createElement('div')
//     obstacle.classList.add('obstacle')
//     // //laat het gemaakte obatakel erdoorheen komen?
//     // //het wordt in een div geplaatst in de game-container
//     gameDisplay.appendChild(obstacle)
    
//     }
//     obstacleGenerator()
// })

const bird = document.querySelector('.bird')
const gameDisplay = document.querySelector('.game-container')
const ground = document.querySelector('.ground')

let birdLeft = 180
let birdBottom =220
let grativy=2


function startGame() {
    birdBottom -=grativy
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
}
//om het object te blijven laten vallen.
// interval zorgt voor de snelheid dat het opbject
//interval gaat door een functie en tijd.
let timer= setInterval(startGame, 20) 

function jump(){
   if (birdBottom <500) birdBottom+=50
    // bird.style.bottom=birdBottom + 'px'
}
//als je op de muis klik, dan kan je springen.
document.addEventListener('click', jump)

//hiermee kan je met alle knoopen op toetsenbord springen
// document.addEventListener('keydown', jump)

//hiermee kan je met spacebar springen
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      jump(); // Roep hier je sprongfunctie aan
    }
  });


// function obstacleGenerator(){
//   let obstacleLeft= 500 
//   let randomHeight=Math.random()*60
//   //zpdat de obstakel boven de grond is.
//   let obatakelBottom= randomHeight
//     //je maakt een div
 
// const obstacle= document.createElement('div')
// obstacle.classList.add('obstacle')
// // //laat het gemaakte obatakel erdoorheen komen?
// // //het wordt in een div geplaatst in de game-container
// gameDisplay.appendChild(obstacle)
// obstacle.style.left = obstacleLeft +'px'
// obstacle.style.bottom= obatakelBottom + 233 +'px'

// function moveObstackle(){
//   obatakelBottom -=2
// //  obstacleLeft.style.left=obstacleLeft
// }
//  let timerid= setInterval(moveObstackle,20)
// }

function generateObstacle() {
  let obstacleLeft = 500
  let randomHeight = Math.random() * 60
  let obstacleBottom = randomHeight
  const obstacle = document.createElement('div')
  const topObstacle = document.createElement('div')
  if (!isGameOver) {
      obstacle.classList.add('obstacle')
      topObstacle.classList.add('topObstacle')
  }
  gameDisplay.appendChild(obstacle)
  gameDisplay.appendChild(topObstacle)
  obstacle.style.left = obstacleLeft + 'px'
  topObstacle.style.left = obstacleLeft + 'px'
  obstacle.style.bottom = obstacleBottom + 'px'
  topObstacle.style.bottom = obstacleBottom + gap + 'px'

  function moveObstacle() {
      obstacleLeft -=2
      obstacle.style.left = obstacleLeft + 'px'
      topObstacle.style.left = obstacleLeft + 'px'

      if (obstacleLeft === -60) {
          clearInterval(timerId)
          gameDisplay.removeChild(obstacle)
          gameDisplay.removeChild(topObstacle)
      }
      if (
          obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
          (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200)||
          birdBottom === 0 
          ) {
          gameOver()
          clearInterval(timerId)
      }
  }
  let timerId = setInterval(moveObstacle, 20) 
  if (!isGameOver) setTimeout(generateObstacle, 3000)

}
generateObstacle()


function gameOver() {
  clearInterval(gameTimerId)
  console.log('game over')
  isGameOver = true
  document.removeEventListener('keyup', control)
  ground.classList.add('ground')
  ground.classList.remove('ground-moving')
}






//om de interval te laten stoppen met vallen gebruik je clearinterval.
// clearInterval(timer)