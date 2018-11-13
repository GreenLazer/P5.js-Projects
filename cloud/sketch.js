var img;
var cloudx=0;
var y;
var plus=1;
var nums= []
function preload() {
  img = loadImage("cloud.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0; i<25; i++){
  
  nums.push(round(random(1)))
  }
    
   
}

function draw() {
  background(10, 10, 100);
  image(img, cloudx, height/2 -251);
  cloudx+=plus;
  if(cloudx+517>width){
    plus=-1
    
  }
  if(cloudx<0){
    plus=1
  }
  y=height/2
  textSize(18)
  fill(255)
  for(j=30; j<450; j+=50){
  for(i=0; i<nums.length; i++){
  nums[i]=round(random(1))
  text(nums[i], cloudx+j, y+i*20)
  }
  }
}