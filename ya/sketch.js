function setup() {
  createCanvas(690,690)
}

function draw() {
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
    ellipse(23+ i*80,23+ i*80, random(20,40))
    }
  }
}