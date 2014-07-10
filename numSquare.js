// numSquare(max)
// Create a function called numSquare that will return an array of all 
// perfect square numbers up to, but not exceeding a max number.


var numSquare = function(max) {
	var squaresArr = [];

	for (i = 1; (i * i) <= max; i++){
		squaresArr[i] = i * i;
	}
	return squaresArr;
}

var resultsArr = numSquare(14);
console.log("Squares up to 14 " + resultsArr);

resultsArr = numSquare(55);
console.log("Squares up to 55 " + resultsArr);