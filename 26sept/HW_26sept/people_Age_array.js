// A.You are given an array of people's ages. 

let ages=[83, 26, 32, 13, 23, 3, 36, 28, 64, 48]

// Step 1: Add a person’s age at the end of the array. He is 19 years old.
//  push = using when we add new value at the end of array
ages.push(19)
console.log(ages)
// output= [83, 26, 32, 13, 23, 3, 36, 28, 64, 48, 19]

//Step 2: Add another person’s age at the start of the array. She is 22 years old.
// unshift = use to add value at the stat of the array 
ages.unshift(22)
console.log(ages)
// output=[22, 83, 26, 32, 13,23,  3, 36, 28, 64,48, 19]

// Step 3: Replace the age of the person on index 3 with 17.
// ages[3]=17 or
ages.splice(3,1,17)
console.log(ages)
// output=[22, 83, 26, 17, 13,23,  3, 36, 28, 64,48, 19]

//Step 4: Sort the array in ascending order.
// sort is use to arrange it in ascending order
ages.sort()
console.log(ages)
// output=[13, 17, 19, 22, 23,26, 28,  3, 36, 48,64, 83]

//Step 5: Change it in descending order but do not use the sort method again. 
ages.reverse()
console.log(ages)

// Step 6: Now remove the oldest person and the youngest person from the array.
// shift=remove first element of arr here the first element js oldest person i.e 83
console.log(ages)
// console.log(ages.shift())


// ages.splice(ages.indexOf(youngest),1) or
// ages.splice(4,1)
// splice = use here indexing to remove youngest element from array
console.log(ages)


//Step 7: Check if the person you added who was 19 years old still exists in the array or not and if he does then also check what his age index is now and 
// print it on the console. 
console.log(ages.includes(19))
console.log(ages)
// output = true -> 19 year old is present in existing array
// now find its index 
// indexof = use to find index of element
console.log(ages.indexOf(19))

//         0   1   2    3  4  5  6    7    8   9
// output=[83, 64, 48, 36,  3,28, 26, 23, 22, 19,17, 13]
