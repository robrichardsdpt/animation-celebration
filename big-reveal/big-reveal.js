'use strinct'
// MDN Front-end guide
//18-02-2021 refactored: remove dependencies, add "dependency injection", use ES6 class


//constans
const canvas = document.querySelector('canvas');
const c2d = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function main(){ //the invocation is at the end
  
  //customize the balls
  const props = {
    cant: 15,
    //maxSize: 30,
    //minSize: 5,
    //maxX: window.innerWidth-20,
    //maxY: window.innerHeight-20,
    //velMax: 10,
    //velMin: -10
  }
  
  balls = new BallDrawer(props); // accept integer param

  //loop
  (function loop() {

    c2d.fillStyle = 'rgba(15, 25, 35, 0.70)';
    c2d.fillRect(0, 0, width, height);
    balls.drawStep(c2d);
    requestAnimationFrame(loop);

  })  (); // 😁 💛Js💛

};


//clases
/*====================================================*/

class Ball{
  //properties
  constructor(x, y, vx, vy, color, size){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = size;
  }
  
  //methods
  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
  }
  
  update() {
    if ((this.x + this.size) >= width) {
      this.vx = -(this.vx);
    }

    if ((this.x - this.size) <= 0) {
      this.vx = -(this.vx);
    }

    if ((this.y + this.size) >= height) {
      this.vy = -(this.vy);
    }

    if ((this.y - this.size) <= 0) {
      this.vy = -(this.vy);
    }

    this.x += this.vx;
    this.y += this.vy;
  }
}

class BallDrawer{
  balls = []
  
  constructor (props) {
    let p = { //default props
      cant: typeof props === "number" ? props : 5,
      maxSize: 100,
      minSize: 10,
      maxX: window.innerWidth-20,
      maxY: window.innerHeight-20,
      velMax: 10,
      velMin: -10,
      ...props //custom properties
    }
    
    //make balls
    while(this.balls.length <= p.cant){
      
      let size = rand(p.minSize, p.maxSize);
      let currentBall = new Ball(
        rand(p.maxSize,p.maxX), //x
        rand(p.maxSize,p.maxY), //y
        rand(p.velMin,p.velMax), //vx
        rand(p.velMin,p.velMax), //vy
        `rgb(${rand(0,255)},${rand(0,255)}, ${rand(0,255)})`, //color
        size); //size
      
      this.balls.push(currentBall);  
    }
    
    function rand(min, max) { //private function 
      const num = Math.floor( Math.random() * (max - min + 1)) + min;
      return num;
    }
  }
  
  drawStep(ctx){
    this.balls.forEach( (ball) => {
      ball.draw(ctx);
      ball.update();
    });
  }
  
}

//main invocation
main();
