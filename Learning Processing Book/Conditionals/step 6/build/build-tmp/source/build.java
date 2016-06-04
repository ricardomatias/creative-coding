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

// Example 5-7: "Bouncing" color

// Two variables for color.
float c1 = 0;      
float c2 = 255;    

// Start by incrementing c1.
float c1dir = 1;  
// Start by decrementing c2.
float c2dir = -1; 

public void setup() {
  size(200,200);
}

public void draw() {
  noStroke();
  
  // Draw rectangle on left
  fill(c1,0,c2);
  rect(0,0,100,200);

  // Draw rectangle of right
  fill(c2,0,c1);
  rect(100,0,100,200);

  // Adjust color values
  c1 = c1 + c1dir;
  c2 = c2 + c2dir;
  
  // Instead of reaching the edge of a window, these variables reach the "edge" of color:  
  // 0 for no color and 255 for full color.  
  // When this happens, just like with the bouncing ball, the direction is reversed.

  // Reverse direction of color change 
  if (c1 < 0 || c1 > 255) {
    c1dir *= -1;
  }

  if (c2 < 0 || c2 > 255) {
    c2dir *= -1;
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
