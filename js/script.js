"use strict";

/*function Test() {
	var other = "otherstring";
	console.log("Test works!!!!!!!!!");
	this.stringer = "string";
	console.log(this.stringer);
	this.otherstring = other;
}
*/

/*$("$section").click(function () {
	$(".tester").fadeIn(500, function () {
		$(this).addClass("high");
	});
});
*/

/*
$(document).ready(function () {
	"use strict";
	var dan = new Test;
	console.log(dan.stringer);
});
*/

/*
function chCheck(key, value) {
	if (key === "age") {
		return false;
	}
	console.log(key + value);
}

function chCheck2(key, value) {
	return key + key + value + value;
	console.log(key + value);
}

$.each(characters, chCheck);

var bobb = $.map(chCheck2, characters);

console.log(bobb);

var i = 0;
*/
/*$(".list-div a").each((function (index, value) {
	var time = 0;
	return function () {
		time += 1000;
		$(this).fadeTo(time, 1).fadeOut(time);
	}
}()));
*/
/*
function myParseInt(str) {
	//return 0;
	var i = 0;
	for (i; i < str.length; i++) {
		console.log(str.charAt(i));
	}

	//return parseInt(str);
}

myParseInt("bobby");
*/
/*
function bob() {
	return "bob";
}

console.log(bob());

var steve = function () {
	return "steve";
}

console.log(steve());

var testing = () => {
	return "testing"
};

console.log(testing());

() => {
	return "yo"
};

(() => "foobar")();

var retesting = () => "retesting";

console.log(retesting());

var cheese = (a) => {
	a = "never";
	return a;
};

console.log(cheese("yooooo"));
*/
/*
var first = [
	"fake first name",
	"Bob",
	"Steve",
	"John",
	"Hank"
];

var lastName = [
	"Johnson",
	"Theaker",
	"Smith",
	"Hill"
];

var characters = {
	name: "sam",
	last: "katz",
	age: 24,
	height: 168
};

function (value, index) {
	return value + " new";
}

var newFirst = $.map(first, newFirstFunction);

console.log(first);
console.log(newFirst);
*/

var firster = [
	"fake first name",
	"Bob",
	"Steve",
	"John",
	"Hank"
];

var newFirstFunction1 = function (value, index) {
	return value + " new# " + index;
};

var repeated = function (value, index) {
	return value + " new# " + index;
};


var firstNameObject = {
	init: function () {
		console.log(this.firstName);
		console.log(this.newFirstMap());
	},
	firstName: [
		"Bob",
		"Steve",
		"John",
		"Hank"
	],
	newFirstFunction: function (value, index) {
		return value + " new# " + index;
	},
	newFirstMap: $.map(this.firstName, this.newFirstFunction)
};

/*
function FirstNameConstructor() {
	//var self = this;
	//this.init = function () {
		//console.log(this.firstName);
		//console.log(this.newFirstMap);
	};
	this.firstName = [
		"Bob",
		"Steve",
		"John",
		"Hank"
	];
	this.newFirstFunction = function (value, index) {
		return value + " new# " + index;
	};
	this.newFirstMap = $.map(this.firstName, this.newFirstFunction);
	
	console.log(this.firstName);
	console.log(this.newFirstMap);
}
*/

$(document).ready(function () {
	firstNameObject.init();
	//var start = new FirstNameConstructor();
	//start.init();
});