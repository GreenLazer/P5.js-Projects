var sun = {
  x:0,
  y:0
}

var planet = {
  x:150,
  y:150
}
var moon = {
  x:60,
  y:60
}
var myAngle = 0
var sun
var earth
var moon
function preload(){
  sun = loadImage("sun.png");
  earth = loadImage("earth.png")
  moon = loadImage("moon.png")
}
function setup() {
  createCanvas(800,600)
}
function draw() {
  background(255)
  
  translate(width/2, height/2)
  image(sun,-100,-100,200,200)
  rotate(myAngle)
  image(earth,planet.x,planet.y, 60,60)
  // translate(planet.x  + 40 ,planet.y  + 40)
  // rotate(myAngle)
  // image(moon, moon.x,moon.y, 50, 50)
 
  myAngle += 0.009
}