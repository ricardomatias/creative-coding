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
float grade = random(0, 100);
if (grade >= 75) {
	println("Assign grade A");
} else if (grade < 75 && grade >= 50) {
	println("Assign grade B");
} else if (grade < 50 && grade >= 25) {
	println("Assign grade C");
} else {
	println("Assign grade D");
}
    noLoop();
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
