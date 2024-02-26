/**
 * Condition
 */

var youLikeMeat = false;
var myNum = 10;
var c_myNum;

if (youLikeMeat == true) {
	document.write("This is true..");
}else{
	document.write("Do Nothing");
}

document.write("<br>");

var myAge = 26;

// || "Or" Condition, If only 1 of this condition is true -> It will true, if all false -> go to else
if (myAge < 18 || myAge > 30 || myAge === 26) {
	document.write("You aint Coming");
}else{
	document.write("You can come, you little dude!");
}

document.write("<br>");

// && Condition, bot of the condition must be match
if (myAge >= 18 && myAge <= 30) {
	document.write("You can come, you little dude!");
}else{
	document.write("You aint Coming"); //TODO
}
