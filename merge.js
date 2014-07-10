// merge(arr1, arr2)
// Write a function called merge. The function should take two sorted arrays 
// of numbers as input and return a merged array of the sorted numbers from 
// the input. For example, if the input arrays were var arr1 = [3,6,11]; 
// var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].

// rejected conditions
// i < (array1.length + array2.length
// j < array1.length || k < array2.length

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];


var merge = function (array1, array2) {
	//var i = 0, j = 0, k = 0;
	var arrMerged = [];

	for (var i = 0, j = 0, k = 0; j < array1.length || k < array2.length; i++){
		// test next value from each array
		// take the smaller one and put it in the new array
		// increment that counter
		if (array1[j] < array2[k] || array2[k] === undefined) {
			arrMerged[i] = array1[j];
			j++;
			// console.log("i: " + i + ", j: " + j);
			// console.log("\t" + "value placed: " + arrMerged[i]);
			// console.log("\t" + array1.length);
		}
		else if (array1[j] > array2[k] || array1[j] === undefined) {
			arrMerged[i] = array2[k];
			k++;
			// console.log("i: " + i + ", k: " + k);
			// console.log("\t" + "value placed: " + arrMerged[i]);
			// console.log("\t" + array2.length);
		}
	}
	return arrMerged;
}

var Merged = merge(arr1, arr2);
console.log(Merged);





// Anil's solution
// merge

// var list1 = [3,6,11];
// var list2 = [2,4,5,8,9];
// // [2,3,4,5,6,8,9,11]

// var merge = function(arr1, arr2) {
//   var result = [];

//   while (arr1.length && arr2.length ) {

//     if (arr1[0] <= arr2[0]) {
//       result.push(arr1.shift());
//     }else {
//       result.push(arr2.shift());
//     }
//   }
//   return result.concat(arr1).concat(arr2);
// }

// console.log(merge(list1, list2));
// // console.log(list1);
// // console.log(list2);