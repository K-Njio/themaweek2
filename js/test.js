document.addEventListener('DOMContentLoaded', () => {
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
    
    
    function obstacleGenerator(){
        //je maakt een div
    const obstacle= document.createElement('div')
    obstacle.classList.add('obstacle')
    // //laat het gemaakte obatakel erdoorheen komen?
    // //het wordt in een div geplaatst in de game-container
    gameDisplay.appendChild(obstacle)
    
    }
    obstacleGenerator()
})
// const bird = document.querySelector('.bird')
// const gameDisplay = document.querySelector('.game-container')
// const ground = document.querySelector('.ground')

// let birdLeft = 180
// let birdBottom =220
// let grativy=2


// function startGame() {
//     birdBottom -=grativy
//     bird.style.bottom = birdBottom + 'px'
//     bird.style.left = birdLeft + 'px'
// }
// //om het object te blijven laten vallen.
// // interval zorgt voor de snelheid dat het opbject
// //interval gaat door een functie en tijd.
// let timer= setInterval(startGame, 20) 

// function jump(){
//    if (birdBottom <500) birdBottom+=50
//     // bird.style.bottom=birdBottom + 'px'
// }
// //als je op de muis klik, dan kan je springen.
// document.addEventListener('click', jump)

// //hiermee kan je met alle knoopen op toetsenbord springen
// // document.addEventListener('keydown', jump)

// //hiermee kan je met spacebar springen
// document.addEventListener('keydown', function(event) {
//     if (event.code === 'Space') {
//       jump(); // Roep hier je sprongfunctie aan
//     }
//   });


// function obstacleGenerator(){
//     //je maakt een div
// const obstacle= document.createElement('div')
// obstacle.classList.add('obstacle')
// // //laat het gemaakte obatakel erdoorheen komen?
// // //het wordt in een div geplaatst in de game-container
// gameDisplay.appendChild(obstacle)

// }
// obstacleGenerator()








//om de interval te laten stoppen met vallen gebruik je clearinterval.
// clearInterval(timer)