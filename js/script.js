"use strict";

$("button").click(function () {
	$.ajax("../list.html", {
		success: function (reponse) {
			$("button").after(reponse);
			//console.log("yes");
			//console.log(reponse);
		}
	});
});


$("button").on("click.boobs", function () {
	//console.log("yo");
});

$("button").on("click.billy", function () {
	//console.log("billy");
});

//$("button").off("click.billy");
//$("button").trigger("click.billy");

var obj = {
	one: function(input) {
		console.log("text: " + input);
	}
};

var check = obj.one("hre");