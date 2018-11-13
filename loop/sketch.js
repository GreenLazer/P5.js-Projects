var offset = 1
var diam = 50
var x = 0

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(0)

  if (x < width-diam/2) {
    // if (m < width) {
    //   for (i = 50; i <= width; i += 10) {
    //     m = i
    //     m++
    //     println(m)
    //     drawing();
    //   }
    // } else {
    drawing();

    // }
  } else {
    offset = 0
    x = 0
      // drawing();
      // ellipse(200, 200, 200)
  }
}

function drawing() {
  for (i = diam / 2 + 2; i <= width - diam / 2; i += diam + 2) {
    for (j = diam / 2 + 2; j <= width - diam / 2; j += diam + 2) {
      ellipse(i + offset, j + offset, diam)
      x+= 0.075
      if (mouseIsPressed) {
        println(i + offset)
      }
      offset += 0.09

    }
    
  }
}