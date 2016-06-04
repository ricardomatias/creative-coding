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

// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 5-10: Zoog and conditionals
float x = 100;
float y = 100;
float w = 60;
float h = 60;
float eyeSize = 16;

// Zoog has variables for speed in the horizontal and vertical direction.
float xspeed = 3;
float yspeed = 1;


public void setup() {
  size(200,200);  
  smooth();      
}

public void draw() {

  // Change the location of Zoog by speed
  x = x + xspeed;
  y = y + yspeed;

  // An IF statement with a logical OR determines if Zoog has reached either the right or left edge of the screen.  
  // When this is true, we multiply speed by \u00d01, reversing Zoog\u00d5s direction!
  // Identical logic is applied to the y direction as well.
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  background(255);  
  ellipseMode(CENTER);
  rectMode(CENTER); 

  // Draw Zoog's body
  stroke(0);
  fill(150);
  rect(x,y,w/6,h*2);

  // Draw Zoog's head
  fill(255);
  ellipse(x,y-h/2,w,h); 

  // Draw Zoog's eyes
  fill(0); 
  ellipse(x-w/3+1,y-h/2,eyeSize,eyeSize*2); 
  ellipse(x+w/3-1,y-h/2,eyeSize,eyeSize*2);

  // Draw Zoog's legs
  stroke(0);
  line(x-w/12,y+h,x-w/4,y+h+10);
  line(x+w/12,y+h,x+w/4,y+h+10);
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
