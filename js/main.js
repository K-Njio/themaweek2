let bird = document.getElementById("bird");
let pipes = document.querySelectorAll(".pipe");

document.addEventListener("keydown", flap);

function flap(event) {
  if (event.code === "Space") {
    birdJump();
  }
}

function birdJump() {
  bird.style.transition = "transform 0.2s";
  bird.style.transform = "translateY(-40px)";

  setTimeout(() => {
    bird.style.transition = "transform 0.2s";
    bird.style.transform = "translateY(0)";
  }, 200);
}

function movePipes() {
  pipes.forEach((pipe) => {
    let pipeLeft = parseInt(pipe.style.left);
    if (pipeLeft <= -60) {
      pipe.style.left = "400px";
    } else {
      pipe.style.left = pipeLeft - 1 + "px";
    }
  });
}

function checkCollision() {
  let birdRect = bird.getBoundingClientRect();
  pipes.forEach((pipe) => {
    let pipeRect = pipe.getBoundingClientRect();
    if (
      birdRect.bottom > pipeRect.top &&
      birdRect.top < pipeRect.bottom &&
      birdRect.right > pipeRect.left &&
      birdRect.left < pipeRect.right
    ) {
      alert("Game Over!");
      resetGame();
    }
  });
}

function resetGame() {
  bird.style.transition = "none";
  bird.style.transform = "translateY(0)";
  pipes.forEach((pipe, index) => {
    pipe.style.left = (200 + index * 150) + "px";
  });
}

setInterval(movePipes, 10);
setInterval(checkCollision, 10);
