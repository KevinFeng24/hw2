function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  noStroke();

  let red = color(20, 0, 70);
  let blue = color(70, 100, 90);
  let yellow = color(255, 35, 0);

  let leftLineX = 80;
  let lowerLineY = 260;
  let rightLineX = 270;
  let upperShortLineY = 50;
  let lowerShortLineY = 360;

  fill(blue);
  rect(0, lowerLineY, leftLineX, height - lowerLineY);

  fill(red);
  rect(leftLineX, 0, width - leftLineX, lowerLineY);

  fill(yellow);
  rect(rightLineX, lowerShortLineY, width - rightLineX, height - lowerShortLineY);

  stroke(0);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(leftLineX, 0, leftLineX, height);
  line(0, lowerLineY, width, lowerLineY);
  line(rightLineX, lowerLineY, rightLineX, height);

  strokeWeight(20);
  line(0, upperShortLineY, leftLineX, upperShortLineY);

  strokeWeight(5);
  line(rightLineX, lowerShortLineY, width, lowerShortLineY);
}
