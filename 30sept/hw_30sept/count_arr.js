// 1) Given an array of strings, count the number of times each string appears and return an object with the string as the key and the count as the value.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Expected Output: { apple: 3, banana: 2, orange: 1 }

const fCount = {}  // to store 
           // key 
for (const fruit of fruits) {
  fCount[fruit] = (fCount[fruit] || 0) + 1
}

console.log(fCount)