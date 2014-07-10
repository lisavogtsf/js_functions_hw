// letterCount(word)
// Write a function that takes a string that finds out how many times 
// a character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// BONUS: Make sure that lower case letters and upper case letters count for 
// the same character. Also, ignore spaces and punctuation.


// words array
var words = "apple";
//"apples bananas apples";
// count hash
var count = {};

var letterCount = function(input) {
	// take in input, run downcase on it then put that into variable string
	string = input.toLowerCase();
		
	// for loop looking at each letter in sequence
	for (var i = 0; i < string.length; i++){
		count[string[i]] = 0;
		
		for (var j = 0; j < string.length; j++){
		// only last instance of a letter really counts, 
		// reset the key's counter to 0
		// nested for loop traverses rest of string to see if there is
		// a match, 
			if (string[i] === string[j]){
				//and if there is, increments the count
				count[string[i]] += 1;

			}
		}
	}			

}

// I'm still not happy with the print format, but oh well!

// letterCount(words);
// console.log(count);


// // Solution by Anil
// var word = "mississippi";

// var letterCount = function(letters) {

//   var result = {}

//   for(var i = 0; i < letters.length; i++) {

//     if (result[letters[i]]) {
//       result[letters[i]] += 1;
//     } else {
//       result[letters[i]] = 1;
//     }

//   }

//   return result;
// }

// console.log(letterCount(word));











