var bubbles = []
var endTime = 0
var speed = 900
var points = 0

function setup() {
  createCanvas(900, 700)
  ;
}

function draw() {
  background(255);
  if(millis()-endTime>speed){
  bubbles.push(new Bubble())
    endTime=millis()
    speed-=0.09
  }

  for (var i = 0; i < bubbles.length; i++) {
    fill(100, 0, 120, 200)
    stroke(0)
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].sz)
    speed -= 0.01
    bubbles[i].move();
  }
  fill(0)
  textSize(50)
  text("Your score is " + points, 20, 40)
}

function Bubble() {
  this.sz = random(50, 250);
  this.x = random(width - 100);
  this.y = random(height - 100);
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1)
  };
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].sz / 2) {
      bubbles.splice([i], 1)
      points++

    }
  }

}