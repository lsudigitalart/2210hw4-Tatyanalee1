var x = 100
var y = 400;
var w = 20;

function setup () {
  createCanvas(800, 800);
}

function draw() {
  background(150, 16, 200);
//the dots
  fill(0, 0, 150);
  ellipse(200, y, w, w);
  ellipse(300, y, w, w);
  ellipse(400, y, w, w);
  ellipse(500, y, w, w);
  ellipse(600, y, w, w);
  // the pacman movement
  fill(225);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x++;
    }
    else if (keyCode == LEFT_ARROW) {
      x--;
    }
  }
  ellipse(x, 400, 50, 50);
}
