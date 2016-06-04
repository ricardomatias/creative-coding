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
	size(512, 512);
	smooth();
	rectMode(CENTER);
	


}
public void draw() {
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
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "build" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
