var bubbles = []
var playing = 0


function setup() {
  createCanvas(700, 700)
  for (var i = 0; i < 10; i++) {
    bubbles.push(new Bubble())
  }
}

function draw() {
  background(255);


  if (playing === 0) {
    textSize(30);
    text('Pop the bubbles as fast as you can.', 100, 250)
    if (millis() / 1000 > 3) {
      playing = 1
    }
  }
  if (playing == 1) {
    
    for (var i = 0; i < bubbles.length; i++) {

      ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].sz)
      bubbles[i].jiggle();
      bubbles[i].move();
    }
    text(floor(millis()/1000), 50, 50)
    if (bubbles.length === 0) {
      playing = 2
      secs= floor(millis()/1000)
    }
  }
  if(playing==2){
    textSize(50);
    text('You won in ' + secs + ' seconds!', 100,250)
  }
}

function Bubble() {
  this.sz = random(40, 150);
  this.x = random(width - 100);
  this.y = random(height - 100);
  this.dX = random(1, 8)
  this.dY = random(1, 8)
  this.jiggle = function() {
    this.x += random(-5, 5);
    this.y += random(-1, 1);
  };
  this.move = function() {
    if (this.x >= width - this.sz / 2) {
      this.x = width - this.sz / 2
      this.dX *= -1
    }
    if (this.x <= this.sz / 2) {
      this.x = this.sz / 2
      this.dX *= -1
    }
    //yvar
    if (this.y >= height - this.sz / 2) {
      this.y = height - this.sz / 2
      this.dY *= -1
    }
    if (this.y <= this.sz / 2) {
      this.y = this.sz / 2
      this.dY *= -1
    }
    this.x += this.dX
    this.y += this.dY

  };
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].sz / 2) {
      bubbles.splice([i], 1)


    }
  }

}