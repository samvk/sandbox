/*jslint vars: true plusplus: true */
/*jshint esversion: 6*/
/*global $, document, Image, window, setTimeout, setInterval, clearInterval*/

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