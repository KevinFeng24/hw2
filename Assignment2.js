function setup() {
  createCanvas(400, 400);
}

var x = 10;
var changeInX = 3;

function draw() {
  background(220);
  
  ellipse(x, 200, 40);
	
	ellipse(200, x, 40); 
	
	ellipse(400-x,200,40)
	
	ellipse(200,400-x,40)
	
	ellipse(x, x, 40)
	
	ellipse(400-x,x,40)
	
	ellipse(400-x,400-x,40)
	
	ellipse(x,400-x,40)
  
  x = x + changeInX;
  
  if (x > width) {
    changeInX = -3;
  }
  
  if (x < 0) {
    changeInX = 3;
  }
}
