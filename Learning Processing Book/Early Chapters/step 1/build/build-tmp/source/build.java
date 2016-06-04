import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class build extends PApplet {

public void setup() {
	size(200,200);
	smooth();
	frameRate(30);
}

public void draw() {
	background(255);

	ellipseMode(CENTER);
	rectMode(CENTER);

	// Zoog's body
	stroke(0);
	fill(175);
	rect(mouseX, mouseY, 20, 100);

	// Zoog's head
	stroke(0);
	fill(255);
	ellipse(mouseX, mouseY-30, 60, 60);

	// Zoog's eyes
	fill(mouseX, 0, mouseY);
	ellipse(mouseX - 19, mouseY-30, 16, 32);
	ellipse(mouseX + 19, mouseY-30, 16, 32);

	// Zoog's legs
	stroke(0);
	line(mouseX-10, mouseY+50, pmouseX-10, pmouseY+60);
	line(mouseX+10, mouseY+50, pmouseX+10, pmouseY+60);

}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "build" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
