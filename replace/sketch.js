var go = []
var string

function setup() {
  var num = newNum();
  for (var i = 0; i < 5; i++) {
    splice(go, newNum(), i)
  }
  go = sort(go, go.length)
  print(go)
}

function draw() {
  
}

function newNum() {
  return floor(random(0, 9) * 100)
}

function replace(array, nw, position) {
  array.splice(position, 1)
  splice(array, nw, position)
}

function keyPressed() {
  
  replace(go, 0 , keyCode-49);
  print(go)
  
}