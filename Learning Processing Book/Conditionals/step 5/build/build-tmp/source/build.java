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

// Example 5-6: Bouncing Ball
int x = 0;
int speed = 1;

public void setup() {
  size(200,200);
  smooth();
}

public void draw() {
  background(255);

  // Add the current speed to the x location.
  x = x + speed;

  // Remember, || means "or."
  if ((x > width) || (x < 0)) {
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    speed = speed * -1;
  }

  // Display circle at x location
  stroke(0);
  fill(175);
  ellipse(x,100,32,32);
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
