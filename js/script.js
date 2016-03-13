var ready = true;

var dan = "before";

!ready ? dan = "new" : console.log("falseee");

console.log(dan);

function ttt() {
	console.log("true");
}

function fff() {
	console.log("false");
}


var ready2 = true;

var dan2 = "before";

function newReady() {
	this.test = false;
}

var billy = new newReady();

billy.test ? console.log("true1111") : console.log("false111");