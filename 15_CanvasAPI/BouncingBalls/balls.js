const canvas = document.querySelector('#ballCanvas');
//set width and height 100% 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const allBalls = [];

//class Ball
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xVel = (Math.random() - 0.5);
    this.yVel = (Math.random() - 0.5);
    this.size = Math.random() * 30 + 10;
    this.color = Ball.getRandomColor()
  }

  static getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
  }

  drawBall() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    //daw a circle from the coordinates x, y -> cxt.arc(x,y,radious (width), begin angle (in radians), end angle)
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  updatePositionBall() {
    //check x bounderies canvas
    if(this.x + this.size >= canvas.width || this.x - this.size <= 0) {
      this.xVel = -this.xVel;
    }
    //check y bounderies canvas
    if(this.y + this.size >= canvas.height || this.y - this.size <= 0) {
      this.yVel = -this.yVel;
    }

    this.x += this.xVel;
    this.y += this.yVel;

    //simulate gravity
    if(this.y + this.size < canvas.height) { //ball boundery
      this.yVel += 0.002;
    }
  }
}

function runAnimatedBalls() {
  //to show each ball frame clean
  ctx.fillStyle = "#f2f2f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for(let ball of allBalls) {
    ball.updatePositionBall();
    ball.drawBall();
  }
  requestAnimationFrame(runAnimatedBalls)
}

runAnimatedBalls();

//add listeners to clicks on canvas
canvas.addEventListener('click', (e) => {
  console.log('CLICK in coordinates x, y', e.clientX, e.clientY);
  //get x, y coordinates
  const { clientX: x, clientY: y} = e;
  //create a new ball instance
  const newBall = new Ball(x,y);
  //add new instance to alBalls array
  allBalls.push(newBall);
  //run animation
  this.runAnimatedBalls()
})
