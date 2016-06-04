'use strict';

var p1,
    v2,
    x,
    y,
    center,
    angle,
    speed,
    halfHeight,
    halfWidth;

var SPEED = 100;

function setup() {
  var myCanvas = createCanvas(800, 800);

  myCanvas.parent('canvas');

  // init
  halfWidth = width / 2;
  halfHeight = height / 2;

  angle = 0;
  speed = 10;

  p1 = particle.create(halfWidth + 200, halfHeight, speed, angle);

  center = vector.create(0, 0);
}

function draw() {
  background(255);

  strokeWeight(2);
  stroke(135, 121, 211);

  line(halfWidth - 50, halfHeight, halfWidth + 50, halfHeight);
  line(halfWidth, halfHeight - 50, halfWidth, halfHeight + 50);

  ellipse(p1.position.getX(), p1.position.getY(), 100, 100);

  angle = Math.atan2(center.getY() - p1.position.getY(), center.getX() - p1.position.getX());

  p1.velocity.setAngle(angle);

  p1.update();


  // ellipse(v2.position.getX(), v2.position.getY(), 100, 100);
}
