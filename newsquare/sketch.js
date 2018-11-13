var bubbles = []

function setup() {
  createCanvas(700, 700)
  for(var i=0; i<10;i++){
  bubbles.push(new Bubble())
  }
}

function draw() {
  background(255);
  
 

  for (var i = 0; i < bubbles.length; i++) {
 
    rect(bubbles[i].x, bubbles[i].y, bubbles[i].sz, bubbles[i].sz)
    // bubbles[i].move();
  }

}

function Bubble() {
  this.sz = random(10, 150);
  this.x = random(width - 100);
  this.y = random(height - 100);
  // this.move = function() {
  //   this.x += random(-5, 5);
  //   this.y += random(-1, 1)
  // };
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].x-mouseX < 1 && bubbles[i].y - mouseY < 1 && bubbles[i].x - mouseX > -1 * bubbles[i].sz && bubbles[i].y - mouseY > -1 * bubbles[i].sz){
      bubbles.splice([i], 1)


    }
  }

}