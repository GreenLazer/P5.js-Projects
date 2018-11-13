
var img



var playing=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var yoffset = windowHeight/2-50
  camera.zoom = 0.6


  flash = new Group()


  walls = new Group();

  var one =makeWall(-10, 300)
  var two=makeWall(470, -300)

  var three=makeWallSide(750, 250)
  var fourp=makeWallSide(-100, -250)
  var five=makeWallSide(600,500)
  var six= makeWall(1300,500)
  var seven =makeWallSide(600, 700)
   var seven =makeWallSide(700, 1050)
   var eight =makeWallSide(-550, 1050)
   var nine =makeWallSide(-550, 850)
   var ten = makeWall(-1300, 850)
   makeWall(-1090, 300)
   makeWall(-850, 150)
   makeWallSide(-150, 700)
   makeWallSide(-150,500)
   makeWall(-250, -190)
   makeWall(-650, -220)
   makeWall(-450, -220)
   makeWall(-1300, -310)
   makeWall(-1300, -910)
   makeWallSide(-750, -930)
    makeWallSide(-1450, -630)
    makeWallSide(-250, -930)
    makeWall(-80, -950)
    makeWallSide(600, -500)
    makeWallSide(600, -700)
    makeWallSide(100, -1200)
    makeWallSide(800, -1200)
    makeWallSide(1400, -900)
    makeWall(1400, -900)
    makeWallSide(1400, -190)
    makeWall(1600, -50)
    makeWallSide(1500, 100)
    makeWall(650, -460)
    
    
    makeWallSide(-700, 1300)
    makeWallSide(200, 1300)
     makeWallSide(-750, 1450)
    makeWallSide(420, 1450)
    makeWall(960, 1750)
    makeWallSide(1500, 1300)
    makeWallSide(2500, 1300)
    makeWallSide(2500, 1000)
    makeWall(2500, 750)
    makeWallSide(2200, 700)
    makeWallSide(2500, 400)
    makeWall(2500, 100)
    makeWall(2500, -500)
    makeWallSide(2500, -500)
    makeWallSide(2900, -700)
    makeWallSide(2500, -900)
    
    makeWallSide(0, -2000)
    makeWallSide(0, -1600)
    makeWallSide(200, -1400)
    makeWallSide(500, -1800)
    makeWall(900, -1800)
    makeWall(-800, -1800)
    makeWall(-1100, -1500)
    
     blacktop=createSprite(-900, -2000, 10000, 500)
     blackbot=createSprite(-2000, 1700, 10000, 500)
     
     blacktop.shapeColor=0
     blackbot.shapeColor=0
     
    stair=createSprite(560, -410, 50, 50)
    stair.addImage(loadImage("stair.png"));
    
  light1 = createSprite(20, 20, windowWidth * 3, windowHeight * 3)
  light2 = createSprite(20, 20, windowWidth * 3, windowHeight * 3)
  body = createSprite(50, 40)
  light1.shapeColor = 0
  light2.shapeColor = 0
  flash.add(light1)
  flash.add(light2)
  flash.add(body)


  body.position.x = 400
  body.position.y = -150
  body.addImage(loadImage("torch.png"));
  flash.debug = true




}

function draw() {
  flash.bounce(walls)
  
  background(255);

  
if(playing==1){
  if(stair.overlap(body)){
    playing=2
  }

  camera.position.x = body.position.x
  camera.position.y = body.position.y - windowHeight / 2 - 100
   
   light1.position.x = body.position.x - windowWidth * 1.8
  light1.position.y = body.position.y - windowHeight

  light2.position.x = body.position.x + windowWidth * 1.8
  light2.position.y = body.position.y - windowHeight

  if (keyIsPressed) {
    print(keyCode)
      //up w
    if (keyCode == 38) {
      body.position.y -= 10
      body.rotation=0

    }
    //down s
    if (keyCode == 40) {
      body.position.y += 10
      // body.rotation=180

    }
    //left a
    if (keyCode == 37) {
      body.position.x -= 10
      // body.rotation=-90

    }
    //right d
    if (keyCode == 39) {
      body.position.x += 10
      // body.rotation=90
    }

  }

  // if(camera.position.x<)
  drawSprites();
}
if(playing==0){
      body.position.x = 400
  body.position.y = -150
  textAlign(CENTER)
  textSize(70)
  text("Escape the Maze", width/2, height/4)
  textSize(50)
  
  text("Arrow Keys To Move", width/2, height/2)
  
  text("Get to the stairs", width/2, height/1.5)
  
  
}
if(playing==2){
  textAlign(CENTER)
  textSize(70)
  text("You Win! You escaped the maze!", width/2, height/4)
  textSize(50)
  
  text("Press Any Key To Play Again", width/2, height/2)
}
}

function makeWall(x, y) {
  wall = createSprite(x, y)
  wall.addImage(loadImage("wall.jpg"));
  wall.immovable = true;
  walls.add(wall);
}

function makeWallSide(x, y) {
  wall = createSprite(x, y)
  wall.rotation = 90
  wall.addImage(loadImage("wall.jpg"));
  wall.immovable = true;

  walls.add(wall);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(playing==0){
    playing=1
  }
  if(playing==2){
    playing=1
  }
}
function mousePressed(){
  if(playing==0){
    playing=1
  }
  if(playing==2){
    playing=1
  }
}

function end(){
  playing=2
}