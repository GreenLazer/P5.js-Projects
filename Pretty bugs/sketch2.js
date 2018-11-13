var buggers=[]
var num = 50
function setup() {
  cnvs=createDiv(createCanvas(300, 300))
  cnvs.position(301,0);
  
  for(i=0; i<num; i++){
    buggers.push(new Bugger())
  }
}


function draw() {
 
   for(i=0; i<buggers.length; i++){
    buggers[i].show()
    buggers[i].jitter()
  }
  cnvs.style("padding-right", 0 + 'px')
}


function Bugger(){
   this.diam= random(25,100)
    this.x = random(width/2+this.diam/2, width);
  this.y = random(0, height);
  
  
  this.jitter = function(){
    this.x += random(-1, 1)
    this.y += random(-1, 1)
   
 
  }
  
  this.show = function(){
    // noFill();
 strokeWeight(0.1);
    fill(10,10,1,1)
    ellipse(this.x, this.y, this.diam)
  }
}

