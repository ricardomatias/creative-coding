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
	size(200, 200);
	smooth();
	background(255);


}

public void draw() {
	background(255);

	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill(0);

	if (mouseX < width/2 && mouseY < height/2) {
		rect(0, 0, width/2, height/2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width/2, height/2);
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height/2);
	} else {
		rect(width/2, height/2, width/2, height/2);
	}

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
