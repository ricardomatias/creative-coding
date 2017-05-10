'use strict';

var vehicle;

function setup() {
	createCanvas(windowWidth, windowHeight);

	vehicle = new Vehicle(320, 180);
}

function draw() {
	background(51);

	var target = createVector(mouseX, mouseY);

	vehicle.arrive(target);

	vehicle.update();
	vehicle.draw();
}
