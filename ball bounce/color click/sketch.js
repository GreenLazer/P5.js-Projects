var circle1 = {
  size: 100,
  x: 150,
  y: 150,
  xSpeed: 2,
  ySpeed: 2,
  myFillR: 250,
  myFillG: 10,
  myFillB: 50,
  score: 0,
  myText:0,
  textWid:0
};

var circle2 = {
  size: 200,
  x: 150,
  y: 150,
  xSpeed: 4,
  ySpeed: 4,
  myFillR: 250,
  myFillG: 10,
  myFillB: 50,
  score: 0,
  myText:0,
  textWid:0
};

function setup() {
  createCanvas(800, 500)
}

function draw() {
  background(0)



  //circle1
  fill(circle1.myFillR, circle1.myFillG, circle1.myFillB)
  ellipse(circle1.x, circle1.y, circle1.size)
  if(circle1.myFillR+circle1.myFillG+circle1.myFillB >=382){
  fill(0)
}
else{
  fill(255)
}
  textSize(20)
  circle1.myText="Score is " + circle1.score
  circle1.textWid = textWidth(circle1.myText)
  text(circle1.myText, circle1.x-circle1.textWid/2, circle1.y)
  
  if (circle1.x >= width - circle1.size / 2) {
    circle1.xSpeed *= -1
      //circle1.xSpeed *= 0.49
      //circle1.ySpeed *= 0.49
  }
  if (circle1.x <= circle1.size / 2) {
    circle1.xSpeed *= -1
      //circle1.xSpeed *= 0.49
      //circle1.ySpeed *= 0.49

  }
  //yvar
  if (circle1.y >= height - circle1.size / 2) {
    circle1.ySpeed *= -1
      //circle1.xSpeed *= 0.49
      //circle1.ySpeed *= 0.49
  }
  if (circle1.y <= circle1.size / 2) {
    circle1.ySpeed *= -1
      //circle1.xSpeed *= 0.49
      //circle1.ySpeed *= 0.49
  }


  //circle2
  fill(circle2.myFillR, circle2.myFillG, circle2.myFillB)
  ellipse(circle2.x, circle2.y, circle2.size)
  
  if(circle2.myFillR+circle2.myFillG+circle2.myFillB >=382){
  fill(0)
}
else{
  fill(255)
}
  textSize(20)
  circle2.myText="Score is " + circle2.score
  circle2.textWid = textWidth(circle2.myText)
  text(circle2.myText, circle2.x-circle2.textWid/2, circle2.y)
  
  if (circle2.x >= width - circle2.size / 2) {
    circle2.xSpeed = circle2.xSpeed * -1
  }
  if (circle2.x <= circle2.size / 2) {
    circle2.xSpeed = circle2.xSpeed * -1
  }
  //yvar
  if (circle2.y >= height - circle2.size / 2) {
    circle2.ySpeed = circle2.ySpeed * -1

  }
  if (circle2.y <= circle2.size / 2) {
    circle2.ySpeed = circle2.ySpeed * -1

  }


  circle1.x = (circle1.x + circle1.xSpeed)
  circle1.y = (circle1.y + circle1.ySpeed)
  circle2.x = (circle2.x + circle2.xSpeed)
  circle2.y = (circle2.y + circle2.ySpeed)

fill(255)
textSize(20)
text("Total Score " + (circle1.score*10 + circle2.score), 20, 20)
}

function mouseClicked() {
  if (dist(mouseX, mouseY, circle1.x, circle1.y) <= circle1.size / 2) {
    circle1.myFillR = random(255)
    circle1.myFillG = random(255)
    circle1.myFillB = random(255)
    circle1.score++
    circle1.xSpeed *= 1.5
    circle1.ySpeed *= 1.5
  }
  if (dist(mouseX, mouseY, circle2.x, circle2.y) <= circle2.size / 2) {
    circle2.myFillR = random(255)
    circle2.myFillG = random(255)
    circle2.myFillB = random(255)
    circle2.score++
    circle2.xSpeed *= 1.3
    circle2.yspeed *= 1.3

  }


}