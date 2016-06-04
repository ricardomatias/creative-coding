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
