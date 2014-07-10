// primes(max)
// Using your isPrime() function, create a function primes that will return
//  an array of all prime numbers up to a certain amount.

var primes = function(max) {
// make array
	var arr = [];

	for (var i = 0; i < max; i++) {

		if (isPrime(i)) {
			// add to array
			arr.push(i); 
		}
	}
	return arr;
}

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


var primesArr = primes(56);
console.log("All primes up to 56: " + primesArr);


var primesArr = primes(24);
console.log("All primes up to 24: " + primesArr);