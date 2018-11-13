var circle1 = {
  sz: 100,
  x: 150,
  y: 150,
  xSpeed: 4,
  ySpeed: 4
};

var circle2 = {
  sz: 200,
  x: 260,
  y: 150,
  xSpeed: 5,
  ySpeed: 5

};
var player = {
  sz: 50,
  x: 0,
  y: 0,
  dX: 2,
  dY: 2
}



var textWid = 0
var totalSecs
var secs
var startTime
var lives = 3
var level = -1
var fl = 0
var finLevel
var displaySecs
function preload() {
  ball = loadImage("circle.png");
  // back=loadImage("back.png")
}

function setup() {
  createCanvas(900, 500)

}

function draw() {
  background(255)
    // image(back,0,0,600,900)
  totalSecs = floor(millis() / 1000)
  secs = totalSecs - startTime


  if (level == -1) {
    image(ball, 150, 300, 150, 150)
    image(ball, 600, 100, 150, 150)
    textSize(50)
    text("Don't Die!", width / 2.5, height / 2.5)
    textSize(20)
    text("Click-to-Play", width / 2.2, height - 200)
    reset();
  }


  if (level ==0) {
    fill(0)
    if (secs < 3) {
      textSize(35)
      text("Try moving your mouse around a little, Pal", width / 6, 100)
    }
    if (secs >= 3 && secs <= 5) {
      textSize(20)
      fill(255)
      ellipse(width - 50, height - 50, 50, 50)
      fill(0)
      text("If you want to live,", width - 250, height - 120)
      text("come over here.", width - 240, height - 100)
      if (secs >= 4) {
        text("Quickly, Idiot!", width - 230, height - 80)
      }
      if (secs >= 5) {
        textSize(40)
        text("Remember! Don't let the balls touch you!", 20, 300)
      }
    }
    playerWork();
    if (secs > 5) {
      level= 1
      reset();
      player.x = width - player.sz
      player.y = height - player.sz
      
    }
  }


  if (level == 1) {
    playerWork();
    ballsWork(1);
   
    if (secs > 15) {
      textSize(30)
      text("Entering Level 2", width / 3, height / 2)
      if (secs > 17) {
        level = 2
      }
    }
  }

  if (level == 2) {
    ballsWork(2.009);
    playerWork();
    // circle1.x = (circle1.x + circle1.xSpeed)
    // circle1.y = (circle1.y + circle1.ySpeed)
    // circle2.x = (circle2.x + circle2.xSpeed)
    // circle2.y = (circle2.y + circle2.ySpeed)
    if (secs > 23 && secs < 25) {
      textSize(30)
      text("Entering Level 3", width / 3, height / 2)
    }
    if (secs > 25) {
      level = 3
    }
  }
  if (level == 3) {

    ballsWork(3.09);
    playerWork();
    if(secs > 33){
      text("Entering Level 4", width / 3, height / 2)
    }
    if(secs > 35){
      level =4
    }
  }
  if (level == 4) {
     fill(0)
    textSize(50)
    text("YOU WON!", width / 3, height / 2 - 100)
    textSize(20)
    text("You got to level " +  level + "!", (width / 2.5) , height / 2.5)
    text("click to play again", (width / 2.5) , height / 1.5)
  }
  if (level == 5) {
    fill(0)
    textSize(50)
    text("GAME OVER", width / 3, height / 2 - 100)
    textSize(20)
    text("You got to level " + finLevel + "!", (width / 3) + (width / 10), height / 2.5)
    text("click to play again", (width / 3) + (width / 10), height / 1.5)
    if(finLevel==1){
      text("That's a little sad, isn't it?",(width / 3) + (width / 15), height / 2.2);
    }
    if(finLevel==2){
      text("Seriously! Try a LITTLE harder next time",(width / 3.2) , height / 2.2);
    }
    if(finLevel==3){
      text("Nice Job, but you can do better.",(width / 2.8) , height / 2.2);
    }
  }
}

function mouseClicked() {
  if (level == -1) {

    level = 0
    reset();
    player.x = mouseX
    player.y = mouseY
    startTime = totalSecs
  }

  if (level == 5) {
    reset();
    startTime = totalSecs
    level = 1

  }
  if(level== 4){
    reset();
    startTime = totalSecs
    level = 1
  }
}

function reset() {
  player.sz = 50
  lives = 3
  player.x = width - 50
  player.y = height - 50
  circle1.x = 150
  circle1.y = 150
  circle2.x = 350
  circle2.y = 150
}

function playerWork() {
  fill(fl)
  player.dX = player.x - mouseX
  player.dY = player.y - mouseY
  line(mouseX, mouseY, player.x, player.y)
  ellipse(player.x, player.y, player.sz)

  ellipse(mouseX, mouseY, 10, 10)
  player.x = player.x - (player.dX / 10)
  player.y = player.y - (player.dY / 10)
}


function ballsWork(mult) {
  image(ball, circle2.x - circle2.sz / 2, circle2.y - circle2.sz / 2, circle2.sz, circle2.sz)
  image(ball, circle1.x - circle1.sz / 2, circle1.y - circle1.sz / 2, circle1.sz, circle1.sz)
    // ellipse(circle1.x, circle1.y, circle1.sz)
    // ellipse(circle2.x, circle2.y, circle2.sz)


  if (circle1.x >= width - circle1.sz / 2 ) {
    circle1.x=width - circle1.sz / 2
    circle1.xSpeed *= -1
  }
  if ( circle1.x <= circle1.sz / 2) {
    circle1.x= circle1.sz / 2
    circle1.xSpeed *= -1
  }
  //yvar
  if (circle1.y >= height - circle1.sz / 2 ) {
    circle1.y = height - circle1.sz / 2
    circle1.ySpeed *= -1
  }
  if (circle1.y <= circle1.sz / 2) {
    circle1.y = circle1.sz / 2
    circle1.ySpeed *= -1
  }
  
  
  if (circle2.x >= width - circle2.sz / 2 ) {
    circle2.x = width - circle2.sz / 2
    circle2.xSpeed *= -1
  }
  if (circle2.x <= circle2.sz / 2) {
    circle2.x = circle2.sz / 2
    circle2.xSpeed *= -1
  }
  //yvar
  if (circle2.y >= height - circle2.sz / 2 ) {
    circle2.y = height - circle2.sz / 2
    circle2.ySpeed = circle2.ySpeed * -1
  }
  if (circle2.y <= circle2.sz / 2) {
    circle2.y = circle2.sz / 2
    circle2.ySpeed = circle2.ySpeed * -1
  }
  
  
  if (dist(circle1.x, circle1.y, circle2.x, circle2.y) <= circle1.sz / 2 + circle2.sz / 2) {
    circle1.xSpeed *= -1
    circle1.ySpeed *= -1
    circle2.xSpeed *= -1
    circle2.ySpeed *= -1
  }
  if (dist(circle1.x, circle1.y, player.x, player.y) <= circle1.sz / 2 + player.sz / 2) {
    lives--
    circle1.xSpeed *= -1
    circle1.ySpeed *= -1
    circle2.xSpeed *= -1
    circle2.ySpeed *= -1
  }
  if (dist(circle2.x, circle2.y, player.x, player.y) <= circle2.sz / 2 + player.sz / 2) {
    lives--
    circle1.xSpeed *= -1
    circle1.ySpeed *= -1
    circle2.xSpeed *= -1
    circle2.ySpeed *= -1
  }

  circle1.x += circle1.xSpeed * mult
  circle1.y += circle1.ySpeed * mult
  circle2.x += circle2.xSpeed * mult
  circle2.y += circle2.ySpeed * mult
  
  textSize(20)
  fill(255)
  rect(20, 30, 75, 25)
  rect(105, 30, 75, 25)
  
  fill(0)
  text("Lives:" + " " + lives, 22, 50)
  text("Level:" + level, 110, 50)
  textWid=textWidth("Seconds:" + " " + secs + 5)
   fill(255)
  rect(195, 30, textWid, 25)
  fill(0)
  text("Seconds:" + " " + secs, 202, 50)
  if (lives <= 0) {
    finLevel=level
    
    level = 5
  }
  if(lives==3){
    fl=0
    
  }
  if(lives==2){
    fl=100
    
  }
  if(lives==1){
    fl=200
    
  }
}