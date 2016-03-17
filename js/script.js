function arraySum(a) {

	// i will be an array, containing integers, strings and/or arrays like itself.
	// Sum all the integers you find, anywhere in the nest of arrays.
	var total;
	var slot;

	Object.prototype.numCheck = function() {
		if (this typeof "number") {
			total += this;
		}
	}

	for (var i = 0; i <a.length; i++){
		slot = a[i];
		slot.numCheck();
	}

	return total;
}