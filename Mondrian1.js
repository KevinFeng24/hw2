function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  noStroke();

  let red = color(20, random(0,250), 220);
  let blue = color(0, 120, 20);
  let yellow = color(255, 235, 0);

  let leftLineX = random(70,80);
  let lowerLineY = 300;
  let rightLineX = 350;
  let upperShortLineY = 200;
  let lowerShortLineY = 360;

  fill(blue);
  rect(0, lowerLineY, leftLineX, height - lowerLineY);

  fill(red);
  rect(leftLineX, 0, width - leftLineX, lowerLineY);

  fill(yellow);
  rect(rightLineX, lowerShortLineY, width - rightLineX, height - lowerShortLineY);

  stroke(0);
  strokeWeight(10);
  strokeCap(SQUARE);
  line(leftLineX, 0, leftLineX, height);
  line(0, lowerLineY, width, lowerLineY);
  line(rightLineX, lowerLineY, rightLineX, height);

  strokeWeight(20);
  line(0, upperShortLineY, leftLineX, upperShortLineY);

  strokeWeight(30);
  line(rightLineX, lowerShortLineY, width, lowerShortLineY);
}
