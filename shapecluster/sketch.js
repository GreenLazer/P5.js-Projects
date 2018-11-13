function setup() {
  createCanvas(1000,1000)
  quad(38, 13, 86, 20, 69, 63, 30, 76)
  arc(100, 55, 50, 50, 0, HALF_PI)
  ellipse(166, 46, 55, 55);
  line(30, 90, 85, 75);

}

function draw() {
  fill(mouseY,100,50)

  point(30, mouseX);
  quad(138, mouseY, mouseX, 120, 169, 163, 130, mouseY);
  noFill()
  stroke(0,mouseX,30);
   
  rect(mouseX, mouseY, 130-mouseY/2, mouseY/2);
   stroke(50,200,mouseX/2);
  triangle(mouseX, 175, 208, 120, mouseY, 175);
}