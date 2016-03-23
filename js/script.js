/*jslint vars: true plusplus: true */
/*jshint esversion: 6*/
/*global $, document, Image, window, setTimeout, setInterval, clearInterval*/

function pascalMaker(numRows) {
	let pascal = [[1]];
	let rowCount = 1;
	
	while (rowCount < numRows) {
		pascal[rowCount] = [];
		let newRow = pascal[rowCount];
		let prevRow = pascal[rowCount - 1];

		for (let i = 0; i < prevRow.length + 1; i++) {
			let befNum = prevRow[i - 1] || 0;
			let aftNum = prevRow[i] || 0;
			newRow[i] = befNum + aftNum;
		}
		rowCount++;
	}
	
	return numRows > 0 ? pascal : "Mr. Pascal needs at least one row.";
}

$.fn.addPascal = function(numRows) {
	
	let pascal = [[1]];
	let rowCount = 1;

	while (rowCount < numRows) {
		pascal[rowCount] = [];
		let newRow = pascal[rowCount];
		let prevRow = pascal[rowCount - 1];

		for (let i = 0; i < prevRow.length + 1; i++) {
			let befNum = prevRow[i - 1] || 0;
			let aftNum = prevRow[i] || 0;
			newRow[i] = befNum + aftNum;
		}
		rowCount++;
	}
	
	if (numRows > 0) {
		$(this).append("<div class='pascal-box'></div>");
		$(".pascal-box").css({"text-align" : "center", "margin-bottom": "20px"});
		let stringPascal = pascal.join("<br>");
		$(".pascal-box").last().html(stringPascal);
	}

};

console.table(pascalMaker(5));
console.table(pascalMaker(0));
console.table(pascalMaker(-1));
console.table(pascalMaker("cheese"));
$("body").addPascal(8);
$("body").addPascal(-3);
$("body").addPascal("bill");
$("body").addPascal(6);
$("body").addPascal(20);