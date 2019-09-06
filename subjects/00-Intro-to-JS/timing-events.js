/**
 * Timing Events
 */

var second = 0;

// setInterval only
var timer1 = setInterval(function(){
	second += 3;
	console.log(second + " Seconds Has Passed");
}, 3000);

// setInterval with clear
var timer2 = setInterval(function(){
	waktu += 3;
	console.log(second + " Seconds Has Passed");
	if (waktu > 7) {
		clearInterval(timer);
	}
}, 3000);

// setTimeout
var timer3 = setTimeout(function(){
	console.log("4 Seconds Has Passed");
}, 3000);
