'use strict';

var v,
    x,
    y,
    angle = 0,
    halfHeight,
    halfWidth;



function setup() {
  var myCanvas = createCanvas(800, 800);

  myCanvas.parent('canvas');

  // frameRate(24);

  // bootstrap
  halfWidth = width / 2;
  halfHeight = height / 2;

  v = vector.create(halfWidth, halfHeight);

  v.setLength(halfWidth / 2);

  angle = 0;

  smooth();
}

function draw() {
  background(255);
  strokeWeight(4);

  ellipse(halfWidth, halfHeight, halfWidth, halfHeight);

  strokeWeight(1);
  line(halfWidth, 0, halfWidth, height);

  line(0, halfHeight, width, halfHeight);

  // vector
  x = halfWidth + round(cos(angle) * (halfWidth / 2));
  y = halfHeight + round(sin(angle) * (halfHeight / 2));


  v.setAngle(radians(angle));

  strokeWeight(2);
  ellipse(v.getX() + halfWidth, v.getY() + halfHeight, 100, 100);

  angle += 1;
}
