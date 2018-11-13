var ball = {
  x: 250,
  y: 250,
  dX: 0,
  dY: 0,
  sz: 50

}
var recalb = 0
var rectWid
var rectHt

function setup() {
  createCanvas(800, 550)

}

function draw() {
  background(255)
  rectWid=width-200
  rectHt=height-200
  text("Push space to shoot", 10 , 10 )
  rect(100, 100, rectWid,rectHt)
  ellipse(ball.x, ball.y, 50, 50)

  if (recalb == 0) {
    line(ball.x, ball.y, mouseX, mouseY)
  }
  
  ball.x += (ball.dX / 15) * 0.65
  ball.y += (ball.dY / 15) * 0.65
  
  //xvar
  if (ball.x > 100+rectWid - ball.sz / 2) {
    
    ball.dX *= -0.59
  }
  if (ball.x < 100+ ball.sz / 2) {
    ball.dX *= -0.59
  }
  //yvar
  if (ball.y > rectHt + ball.sz/2 +50) {
    ball.dY *= -0.59
  }
  if (ball.y < 100+ ball.sz / 2) {
    ball.dY *= -0.59
  }
  text(rectHt +ball.sz,100,100)
}

function keyPressed() {
  recalb++
  if(recalb==1){
  ball.dX = 250 - mouseX;
  ball.dY = 250 - mouseY;
  }
  if(recalb==2){
    recalb=0
  }
  
}
//hint similar triangles