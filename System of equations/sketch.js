//line1
var b1
var m1

var x1=0
var y1=250
var x2=500
var y2=500
var y

//ball
var ballx=0
var bally=50
var ballDiam=20
var dX=2
var dY=2

var tiltRight=0
var tiltLeft=50
var wd
var ht
var ctr=0
function setup() {
  wd=displayWidth-100
  ht=displayHeight-200
  createCanvas(wd,ht)
  angleMode(DEGREES)
}

function draw() {
  
  background(255)
 

  strokeWeight(6)
   line(0,0, wd,0)
  line(0,0, 0,ht)
  line(0,ht, wd, ht)
  line( 0, wd, wd,ht)
  y1=mouseY+tiltLeft
  y2=mouseY+tiltRight
    
  var  lnx1 = mouseX-100
  var lnx2 =mouseX+100
  var lny1 = y1
  var lny2 = y2
  
  line(lnx1,lny1,lnx2,lny2)
  ellipse(ballx,bally,ballDiam)
   m1= (y1-y2)/(x1-x2)
   b1=y1
  
  y=m1*ballx+b1
  
  if(abs(bally-y)<8){
    if(ballx>lnx1 && ballx<lnx2)
    rvrs()
    print("hit" + ctr)
  }
  ballx +=dX
  bally +=dY
  bounce()
}

function rvrs(){
  var i = atan2(dY,dX)
  var w=atan2((y1-y2),(x1-x2))
 
  var o=2*w - i

  var theX= cos(o)
  var theY= sin(o)

  dX= theX * 5
  dY = theY * 5
 
  
}
function bounce(){
  if (ballx >= width - ballDiam / 2  ) {
    ballx=width - ballDiam/ 2
    dX *= -1
  }
  if (ballx <= ballDiam / 2) {
    ballx= ballDiam / 2
    dX *= -1
  }
  //yvar
  if (bally >= height - ballDiam / 2 ) {
    bally = height - ballDiam / 2
    dY *= -1
  }
  if (bally <= ballDiam / 2) {
    bally = ballDiam / 2
    dY*= -1
  }
  
}

function keyPressed(){
  //right
  if(keyCode==38){
    
    tiltRight-=15
    if(tiltRight<30){
      
    }

  }
  //left
  if(keyCode==40){
    
    tiltRight+=15
  }
}
