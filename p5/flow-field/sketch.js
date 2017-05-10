'use strict';

var inc = 0.1,
		scl = 10,
		cols, rows;

var zOff = 0;

var fr;

var particles = [];

var flowfield = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	cols = floor(width / scl);
	rows = floor(height / scl);

	fr = createP('');

	flowfield = new Array(cols * rows);

	for (var idx = 0; idx < 10000; idx++) {
		particles.push(new Particle());
	}

	frameRate(60);
}

function draw() {
	// background(255);
	fr.html(floor(frameRate()));
	var yOff = 0;

	// grabPixel => (x + y * width) * 4

	for (var y = 0; y < rows; y++) {
		var xOff = 0;

		for (var x = 0; x < cols; x++) {
			var index = (x + y * cols);

			var angle = noise(xOff, yOff, zOff) * TWO_PI * 4;

			flowfield[index] = angle;
			xOff += inc;

			// stroke(0, 50);

			// push();
			//
			// translate(x * scl, y * scl);
			// rotate(v.heading());
			// strokeWeight(1);
			// line(0, 0, scl, 0);
			//
			// pop();
		}
		yOff += inc;
		zOff += 0.0003;
	}
	strokeWeight(4);

	for (var idx = 0; idx < particles.length; idx++) {
		particles[idx].follow(flowfield);
		particles[idx].update();
		particles[idx].show();
		particles[idx].edges();
	}
}
