// isPrime(num)
// Create a function to return true or false if a number passed in a prime number.

var isPrime = function (num) {

	for (var i = 2; i < num / 2; i++) {
		// console.log("i: " + i);
		// console.log("num % i: " + num % i);

		if (num % i === 0) {
			// num can be divided by other than 1 and itself
			return false;
		} 
	}
	// if got through all possible divisors
	return true;

}

var results = isPrime(21);
console.log("Is 21 prime? " + results);

var results = isPrime(13);
console.log("Is 13 prime? " + results);