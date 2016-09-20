var y = 400;
var w = 20;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(150, 16, 200);
  fill(225);
  ellipse(100, 400, 50, 50);

  fill(0, 0, 150);
  ellipse(200, y, w, w);
  ellipse(300, y, w, w);
  ellipse(400, y, w, w);
  ellipse(500, y, w, w);
  ellipse(600, y, w, w);
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    
    }
}
