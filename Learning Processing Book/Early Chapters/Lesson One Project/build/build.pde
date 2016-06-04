

void setup() {
	size(512, 512);
	smooth();
	rectMode(CENTER);
	


}
void draw() {
	noStroke();
	background(131, 18, 38);
	fill(0, 134, 187);
	if ( mouseX <= width/2 || mouseY <= height/2) {
		ellipse(width/2, height/2, constrain(mouseX, 50, 500), constrain(mouseY, 50, 500) );
	} else {
		fill(238,203,87);
		rect(width/2, height/2, constrain(mouseX, width/2, 500), constrain(mouseY, height/2, 500) );
	}
	fill(18, 197, 150);
	triangle(mouseX - 10, mouseY, mouseX + 20 , mouseY, mouseX + 5, mouseY - 20); 
}