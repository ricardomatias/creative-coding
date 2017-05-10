'use strict';

function setup() {
	createCanvas(320, 240);
	pixelDensity(1);
}


// function draw() {
// 	var yOff = 0;
//
// 	// grabPixel => (x + y * width) * 4
// 	loadPixels();
//
//
// 	for (var y = 0; y < width; y++) {
// 		var xOff = 0;
//
// 		for (var x = 0; x < width; x++) {
// 			var index = (x + y * width) * 4;
//
// 			var n = noise(xOff, yOff) * 255;
//
// 			// RED
// 			pixels[index] = n;
// 			// GREEN
// 			pixels[index + 1] = n;
// 			// BLUE
// 			pixels[index + 2] = n;
// 			// ALPHA
// 			pixels[index + 3] = 255;
//
// 			xOff += 0.01;
// 		}
// 		yOff += 0.01;
// 	}
//
// 	updatePixels();
// }

function draw() {
	var xOff = 0;

	// grabPixel => (x + y * width) * 4
	loadPixels();


	for (var y = 0; y < width; y++) {
		for (var x = 0; x < width; x++) {

			var index = (x + y * width) * 4;

			var n = noise(xOff) * 255;

			// RED
			pixels[index] = n;
			// GREEN
			pixels[index + 1] = n;
			// BLUE
			pixels[index + 2] = n;
			// ALPHA
			pixels[index + 3] = 255;

			xOff += 0.001;
		}
	}

	updatePixels();
}
