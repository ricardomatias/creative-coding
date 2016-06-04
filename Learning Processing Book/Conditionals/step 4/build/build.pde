boolean button = false;

int x = 50;
int y = 50;
int w = 100;
int h = 75;



void setup() {
	size(200, 200);
	smooth();


}

void draw() {

	if (button) {
		background(255);
		stroke(0);
		
	} else {
		background(0);
		stroke(255);
	}

	fill(175);
	rect (x, y, w, h);
}

// Switch Technique
void mousePressed() {
		if (mouseX > x && mouseX < x+w && mouseY >y && mouseY < y+h && mousePressed) {
		button = !button;
	}
	
}