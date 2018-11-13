var destroy = false
var used=[]
var clrn
var ann
var nmen

function setup() {
  createCanvas(0, 0);
  animal = ['Lich', ' Hippogriff', 'Chapel', ' Heron', 'Camel', 'Lord', 'Roebuck', 'Merfolk', 'Druid', 'Satyr', 'Concubine', ' Jeweler', 'Prince', 'Ostrich', 'Magpie', 'Star', 'Lion', 'Hare', 'Boar', 'Priest', 'Sword '];
  clr = ['Thirsty', 'Spirit ', 'Happy', 'Nervous', 'Loud', 'Boiling', 'Greasy', 'Emerald', 'Icy', 'Long', 'Good', 'Leaning', 'Strange', 'Princely', 'Mean', 'Clumsy', 'Stingy', 'Yellow', 'Muddy', 'Copper', 'Arrogant', 'Screeching', 'Demented', 'Hissing', 'Naked', 'Orange', 'Red', 'Dead', 'Oaken', 'Cuddly', 'Greedy', 'Clueless', 'Brown', 'Wet', 'Young', 'Stone', 'Black', 'Awkward', 'Ashamed', 'Antique', 'Alarming', 'Admirable', 'Acrobatic', 'Aching', 'Adventurous', 'Abandoned'];
  nme = ['Inn', 'Tavern', 'Pub'];
}

function draw() {
  background(255);


}

function keyPressed() {

  if (keyCode === ENTER) {
    doot();
  }
  if(keyCode==DELETE){
    
  }

}

function doot() {
  for (var i = 0; i < 10; i++) {
    textSize(30);
    clrn = floor(random(clr.length))
    ann = floor(random(animal.length))
    nmen = floor(random(0, 3))
    println(clr[clrn] + " " + animal[ann] + " " + nme[nmen], width / 2 - 150, height / 2)
    used.push(clr[clrn], animal[ann], nme[nmen])
    println(used)

  }
}