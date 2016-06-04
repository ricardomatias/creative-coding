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

int rectOne = 0;
int rectTwo = 0;
int rectThree = 0;
int rectFour = 0;

public void setup() {
  size(200,200);
}

public void draw() {
  background(0);

  
  // Fill a black color
  noStroke();
  fill(0);

  // Depending on the mouse location, a different rectangle is displayed.    
  if (mouseX < 100 && mouseY < 100) {
    rectOne = 255;
  } else if (mouseX > 100 && mouseY < 100) {
    rectTwo = 255;
  } else if (mouseX < 100 && mouseY > 100) {
    rectThree = 255;
  } else if (mouseX > 100 && mouseY > 100) {
    rectFour = 255;
  }

  rectOne = rectOne - 1;
  rectTwo = rectTwo - 1;
  rectThree = rectThree - 1;
  rectFour = rectFour - 1;

  noStroke(); 
  fill(rectOne);
  rect(0,0,100,100); 
  fill(rectTwo);
  rect(100,0,100,100); 
  fill(rectThree);
  rect(0,100,100,100); 
  fill(rectFour);
  rect(100,100,100,100); 
  
  // Draw grid lines
  stroke(255); 
  line(100,0,100,200); 
  line(0,100,200,100);
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
