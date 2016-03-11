"use strict";

$("button").click(function () {
	$.ajax("../list.html", {
		success: function (reponse) {
			$("button").after(reponse);
			console.log("yes");
			console.log(reponse);
		}
	});
});