// Object myBird
// Object, have Behavior and Method
// Behavior is what kind of things that created the objects, like : speed etc.
// Method is with that object, what kind of things that we can to do using the objects like : speed * timesFly etc.
var myBird = {

	speed: 50,
	timesFly: 7,
	birdsowner: "John",
	fly: function(){
		console.log("The bird's owner is " + this.birdsowner); 
	},
	birdTotal: function(){
		console.log("Total is " + myBird.speed * myBird.timesFly);
	}
															    	
};
// Actually you can change "this" to "bird.birdsowner"
// But, instead of using that, we can use "this",
// So if we create many ojects it will easier (We not gonna change 1 by 1)

console.log(myBird.speed);
// myBird.speed(); //try to call this, it will be an error, cause it's not a function

// Call the function

myBird.fly();

// Again

myBird.birdTotal();
