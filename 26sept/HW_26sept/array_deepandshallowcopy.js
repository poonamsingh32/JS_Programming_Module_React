// B) 

let arr = [1, 2, [3, 4], 5];

// TODO: Create a shallow copy of arr.
let arr1=[...arr] //shallow copy
// Change the nested element `arr[2][0]`.
arr1[2][0]=99;

console.log("Original Array(arr) will be here:",arr)
console.log("Copied Array(arr1) will be here :",arr1)
// Observe if original array also changes.
// output=Original Array(arr) will be here: [ 1, 2, [ 99, 4 ], 5 ]
//Copied Array(arr1) will be here : [ 1, 2, [ 99, 4 ], 5 ]