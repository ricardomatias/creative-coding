void setup() {
	size(200, 200);
	background(255);
	
}

void draw() {
	int y = 0;
	while (y < height) {
		stroke(0);
		line(0, y, width, y);
		y += 10;
}
	
}

