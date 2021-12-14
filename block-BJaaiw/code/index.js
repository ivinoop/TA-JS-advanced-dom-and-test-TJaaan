let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// let ballColor = Math.floor(Math.random()*16777215).toString(16);

let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2;
let dy = -2;
let radius = 10;

let paddleHeight = 20;
let paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let score = 0;
let lives = 3;

let bricks = [];
for(let col = 0; col < brickColumnCount; col++) {
  bricks[col] = [];
  for(let row = 0; row < brickRowCount; row++) {
    bricks[col][row] = {x: 0, y: 0, status: 1};
  }
}

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function collisionDetection() {
  for(let col = 0; col < brickColumnCount; col++) {
      for(let row = 0; row < brickRowCount; row++) {
          let b = bricks[col][row];
          if(b.status == 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount) {
                  alert(`YOU WIN! 🥳🥳 YOUR SCORE 👉 ${score}`);
                  document.location.reload();
                  // clearInterval(interval);
                }
            }
          }
      }
  }
}

function drawScore() {
  c.font = "20px Arial";
  c.fillStyle = "teal";
  c.fillText("Score: " + score, 8, 20);
}

function drawLives() {
  c.font = "16px Arial";
  c.fillStyle = "teal";
  c.fillStyle("Lives: " +lives, canvas.width-65, 20);
}

function drawBall() {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI*2);
  c.fillStyle = "teal";
  c.fill();
  c.closePath();
}

function drawPaddle() {
  c.beginPath();
  c.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  c.fillStyle = "#0095DD";
  c.fill();
  c.closePath();
}

function drawBricks() {
  for(let col = 0; col < brickColumnCount; col++) {
    for(let row = 0; row < brickRowCount; row++) {
      if(bricks[col][row].status == 1) {
        let brickX = (row*(brickWidth+brickPadding)) + brickOffsetLeft;
        let brickY = (col*(brickHeight+brickPadding)) + brickOffsetTop;
        bricks[col][row].x = brickX;
        bricks[col][row].y = brickY;
        c.beginPath();
        c.rect(brickX, brickY, brickWidth, brickHeight);
        c.fillStyle = "#0095DD";
        c.fill();
        c.closePath();
      }
    }
  }
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > canvas.width-radius || x + dx < radius) {
    dx = -dx;
  }
  if(y + dy < radius) {
    dy = -dy;
  } else if(y + dy > canvas.height - radius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
      // dy -= 0.5; // Making the ball move faster when it hits the paddle
    } else {
      lives--;
      if(!lives) {
        alert(`GAME OVER! YOUR SCORE 👉 ${score}`);
        document.location.reload();
        // clearInterval(interval);
      } else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width-paddleWidth) / 2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
    }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

// let interval = setInterval(draw, 7);
draw();