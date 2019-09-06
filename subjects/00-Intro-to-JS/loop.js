var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){
	//console.log("This is links number " + i);
	links[i].className = "links-"+ i;
}

document.write("This is the end of the Loop");

// For & While
document.write("<br>");

var age = 8;

while(age < 10){
	console.log("This is Loop");
	age++;
}
document.write("The End");