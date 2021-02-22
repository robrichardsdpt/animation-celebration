let canvas;
let context;

window.onload = init;

function init(){
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  // Start the first frame request
  window.requestAnimationFrame(gameLoop);
}



function draw() {
  context.fillStyle = 'gold';
  context.fillRect(rectX, rectY, -150, -100);
}

let rectX = 0;
let rectY = 0;

function gameLoop(timeStamp) {
    // Update game objects in the loop
    update();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    rectX += 2;
    rectY += 1;
}