'use strict';

function Particle() {
  this.pos = createVector(random(windowWidth), random(windowHeight));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.prevPos = this.pos.copy();
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl),
        y = floor(this.pos.y / scl),
        index = x + y * cols,
        angle = vectors[index];

    var v = p5.Vector.fromAngle(angle);

    v.setMag(0.5);

    this.applyForce(v);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(0, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;

      this.updatePrev();
    }

    if (this.pos.x < 0) {
      this.pos.x = width;

      this.updatePrev();
    }

    if (this.pos.y > height) {
      this.pos.y = 0;

      this.updatePrev();
    }

    if (this.pos.y < 0) {
      this.pos.y = height;

      this.updatePrev();
    }
  }
}
