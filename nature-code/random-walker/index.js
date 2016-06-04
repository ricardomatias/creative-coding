'use strict';

var w,
    xoff = 0,
    xoff2 = 0,
    halfWidth,
    halfHeight;

function setup() {
  /* bootstrap */
  var myCanvas = createCanvas(600, 400);

  myCanvas.parent('canvas');

  frameRate(60);

  /****/

  halfWidth = width / 2;
  halfHeight = height / 2;

  w = new Walker(48);
}

function draw() {
  background(187);

  w.update();
  w.display();
}


function Walker(size) {
  this.pos = createVector(halfWidth, halfHeight);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.size = size;

  this.radius = size / 2;

  this.update = function() {
    var x = halfWidth + noise(xoff) * random(width * -1, width),
        y = halfHeight + noise(xoff2) * random(height * -1, height);

    var center = p5.Vector.sub(createVector(x, y), this.pos);

    xoff += 9;
    xoff2 += 10;

    if (this.pos.x < 0 + this.radius  || this.pos.y < 0 + this.radius || this.pos.x > width - this.radius || this.pos.y > height - this.radius) {
      this.acc = createVector(halfWidth, halfHeight);

      center = p5.Vector.sub(createVector(halfWidth, halfHeight), this.pos);

      this.vel.setMag(0.1);
    }

    this.acc.add(center);
    this.acc.setMag(0.25);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };

  this.display = function() {
    fill(255);

    noStroke();

    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  };
}
