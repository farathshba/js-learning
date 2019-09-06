'use strict';
const fs = require('fs');
const animalsWild = [
  'cat',
  'rabbit',
  'eagle',
  'dolphin',
  'snake',
  'pigeon',
  'shark',
  'lion'
];
const animalsPet = ['cat', 'rabbit', 'pigeon'];
//const animalsOthers = ["deer", "turtle", "crab", "cow", "elephant"]

let file = fs.readFileSync('animal.json', 'UTF-8');
let data = JSON.parse(file);
let path = './animal.json';

/**
 * Most efficient loop in NodeJS (and a bit JS)
 * Source article: https://medium.com/kbdev/voyage-to-the-most-efficient-loop-in-nodejs-and-a-bit-js-5961d4524c2e
 */

let i = 0;
const iMax = animalsWild.length;
for (; i < iMax; i++) {
  if (animalsPet.indexOf(animalsWild[i]) === -1) {
    // Do some request here
    console.log(animalsWild[i] + ' added');
    data.push(animalsWild[i]);
  }
}

/**
 // Loop using forEach
animalsWild.forEach( item => {
	if (animalsPet.indexOf(item) === -1) {
		console.log(`This is ${item}`)
		data.push(item)
	}		
})
 */

fs.writeFile('animal.json', JSON.stringify(data, null, 4), err => {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote to the file!
  console.log('\n' + 'animal.json file updated!' + '\n');
});
