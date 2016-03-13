function GenerateRandomNumber() {
	var min = -13,
		max = 13;
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	return random;
}

var x = GenerateRandomNumber();

function GenerateRandomSum() {
	var min3 = x - 13,
		max3 = x + 13;
	var sum = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
	return sum;
}

var sum = GenerateRandomSum();

function GenerateRandomNumber2() {
	var min2 = -13,
		max2 = 13;
	var random2;
	while ((random2 + x) !== sum) {
		random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
	}
	return random2;
}

var xx = GenerateRandomNumber2();

$('#x').html(x);
$('#xx').html(xx);
$('#y').html(sum);