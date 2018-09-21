function setup() {
  createCanvas(400, 400);
}

var x = 10;
var changeInX = 3;

function draw() {
  background(220);
	
	fill(x,1/x,80)
  
  ellipse(x, 200, x);
  
  x = x + changeInX;
  
  if (x > width) {
    changeInX = -3;
  }
  
  if (x < 0) {
    changeInX = 3;
  }
}
