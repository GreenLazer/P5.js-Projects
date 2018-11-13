var bugs=[]
var buggers=[]
var num = 50
function setup() {
  canvas=createDiv(createCanvas(300, 300))
  canvas.position(0,0);
  cnvs=createDiv(createCanvas(300, 300))
  cnvs.position(301,0);
  
  for(i=0; i<num; i++){
    buggers.push(new Bugger())
  }
  for(i=0; i<num; i++){
    bugs.push(new Bug())
  }

}


function draw() {
 
  for(i=0; i<bugs.length; i++){
    bugs[i].show()
    bugs[i].jitter()
  }

  canvas.style("padding-right", 50 + 'px')
  
   for(i=0; i<buggers.length; i++){
    buggers[i].show()
    buggers[i].jitter()
  }
  cnvs.style("padding-right", 0 + 'px')
}

function Bug(){
  this.diam= random(5,50)
  this.x = random(1,width/2-this.diam/2);
  this.y = random(1, height);
  
  
  this.jitter = function(){
    this.x += random(-15, 15)
    this.y += random(-15, 15)
    if(this.x>=width/2-this.diam/2){
      this.x -= 15
    }
  }
  
  this.show = function(){
    // noFill();
 strokeWeight(0.1);
    fill(10,10,1,1)
    ellipse(this.x, this.y, this.diam)
  }
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

function mousePressed(){
  background(255)
}
