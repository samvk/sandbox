/*jslint vars: true plusplus: true */
/*jshint esversion: 6*/
/*global $, document, Image, window, setTimeout, setInterval, clearInterval, console*/
/*
function pattern(n) {
	const constN = n;

	//make and set first line
	let outputArray = [];
	let firstLine = [];

	for (let i = 0; i < constN; i++) {
		firstLine.push(n);
		n--;
	}
	outputArray[0] = firstLine;

	//set additional lines
	for (let i = 1; i < constN; i++) {
		//define prev and next line
		let prevLine = outputArray[i - 1];
		let nextLine = prevLine.slice(0, constN - i);

		//set actual next index to nextLine
		outputArray[i] = nextLine;
	}

	//finally, convert each line to a string
	for (let i = 0; i < constN; i++) {
		outputArray[i] = outputArray[i].join("");
	}

	//lastly, break them up into seperate lines
	let output = outputArray.join("\n");
	
	return output;

}

console.log(pattern(101));
*/

/*function Animal() {
	this.kingdom = "animalia";
}

Animal.prototype.double = function (word) {
	return this.kingdom + this.kingdom + word;
} ;

function Dog() {
	this.legs = 4;
}

Dog.prototype = new Animal();

var scruffy = new Dog();

console.log(scruffy.legs);
console.log(scruffy.kingdom);
console.log(scruffy.double("cheese"));
*/

/*
var count = 0;
class Animal {
	constructor(input) {
		this.kingdom = input;
	}
	
	double(word) {
		return 9;
	}
}

class Dog extends Animal {
	constructor(input) {
		super(input);
		this.kingdom = input;
		this.legs = 4;
	}
	
	double(word) {
		count++;
		return this.kingdom + (count < 6 ? this.double() : "end");
		
	}
}

var scruffy = new Dog("inp");

console.log(scruffy.legs);
console.log(scruffy.kingdom);
console.log(scruffy.double("cheese"));
*/

