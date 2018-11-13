var leftEye= document.getElementsByClassName(".left-eye")
var rightEye= document.getElementsByClassName(".right-eye")

function setup(){
  createCanvas(400,500)
}

function draw(){
  ellipse(100,100,100)
  if(mouseY>100){
    leftEye.addEventListener('click', moveEye)
}
}

function moveEye(){
  alert('testing')
}