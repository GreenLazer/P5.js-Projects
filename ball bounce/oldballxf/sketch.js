var xf =1
var xb = 1
var circleSize = 100
var half = circleSize/2
var endPoint 
var startPoint 
function setup() {
  createCanvas(500, 500)
  endPoint = width-half
  startPoint = width-endPoint
  xf = 50
}

function draw() {
  background(255)

  if (xf < 450) {
    xf += 2
    ellipse(xf, height / 2, circleSize, circleSize)
  }
  if (xf >= endPoint) {
    xb = endPoint
  }
  if (xb > startPoint) {
    ellipse(xb, height / 2, circleSize, circleSize)
    xb -= 2
  }
  if (xb <= startPoint) {
    xf = startPoint
  }

}