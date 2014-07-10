// sillySum(arr)
// Write a function that takes an array of numbers, and returns the sum of 
// each number multiplied by its index.

// count += (number * index)

var sampleArr = [3, 5, 7, 1, 6, 2, 4];

var sillySum = function(arr) {
	sumArr = 0;

	for (var i = 0; i < arr.length; i++) {
		sumArr += arr[i] * i;

	}

	return sumArr;
}

var results = sillySum(sampleArr);
console.log(results);