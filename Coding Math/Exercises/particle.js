'use strict';

var particle = {
  position: null,
  velocity: null,

  create: function(x, y, speed, direction) {
    var obj = Object.create(this);

    obj.position = vector.create(x, y);

    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);

    return obj;
  },

  update: function() {
    this.position.addTo(this.velocity);
  },

  accelerate: function(accel) {
    this.position.addTo(accel);
  },

  angleTo: function(p2) {
    var dx = this.position.getX() - p2.position.getX(),
        dy = this.position.getY() - p2.position.getY();

    return Math.atan2(dy, dx);
  },

  distanceTo: function(p2) {
    var dx = this.position.getX() - p2.position.getX(),
        dy = this.position.getY() - p2.position.getY();

    return Math.sqrt(dx * dx + dy * dy);
  }
};
