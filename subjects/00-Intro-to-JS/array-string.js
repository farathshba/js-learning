/**
 * String
 */

// Escaping quotes with backslash
var myString = 'I\'m an average "student", don\'t blame me!';
console.log(myString);

// -1, It used to check weather "average" is not in the myString
if (myString.indexOf("average") === -1) {
	console.log("The word average is not String");
}else{
	console.log("The word average start at position " + myString.indexOf("average"));
}

/**
 * Array
 */

var string1 = "abc";
var string2 = "bcd";
var string3 = "ABC";
var emptystring;

console.log(string1 === string2);
console.log(string1.toLowerCase() === string3.toLowerCase());
// Cause is alphabetic, a is the lowest one
console.log(string1 < string2); 
// HAHAHA, the stupid thing in js, lowercase is greater than Uppercase
// string.slice(3,9);
// string.split(",");

//Array
var myArray = [];

myArray[0] = true;
myArray[3] = 21;
myArray[5] = "Hello!";

console.log(myArray);

var myArray2 = [];

myArray2[0] = true;
myArray2[1] = 21;
myArray2[2] = "Hello!";
myArray2[3] = 42;

console.log(myArray2);
// Combine string and variable with + sign
console.log("myArray2 have " + myArray2.length + " object");
// Sort alphabeticaly or numericaly
console.log(myArray2.sort());
// Revere the sortir
console.log(myArray2.reverse());
