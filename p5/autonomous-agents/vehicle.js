'use strict';

function Vehicle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 5;
  this.maxforce = 0.2;
  this.r = 5;
}

Vehicle.prototype.applyForce = function(force) {
  this.acc.add(force);
};

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);

  var d = desired.mag();

  if (d < 100) {
    var m = map(d, 0, 100, 0, this.maxspeed);

    desired.setMag(m);
  } else {
    desired.setMag(this.maxspeed);
  }

  var steering = p5.Vector.sub(desired, this.vel);
  steering.limit(this.maxforce);

  this.applyForce(steering);
};

Vehicle.prototype.update = function() {
  this.vel.add(this.acc);
  this.vel.limit(this.maxspeed);
  this.pos.add(this.vel);

  this.acc.set(0, 0);
};

Vehicle.prototype.draw = function() {
  var theta = this.vel.heading() + PI / 2;
  fill(255, 150);
  stroke(200);
  strokeWeight(1);

  push();
  translate(this.pos.x, this.pos.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);
  endShape(CLOSE);
  pop();
};
