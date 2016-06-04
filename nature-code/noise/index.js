'use strict';

// usual perlin noise "time" variable ( it's an offset from the beginning of time -> considered 0 on an x-axis)
var xoff = 0;

function setup() {
  var myCanvas = createCanvas(600, 400);

  myCanvas.parent('canvas');
}

function draw() {
  background(51);

  var x = noise(xoff) * width;

  xoff += 0.1;

  fill(255);

  ellipse(x, height / 2, 48, 48);
}
