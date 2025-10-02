// 6) Find Longest Word
// From ["sun", "moon", "stars", "galaxy"]
// , use reduce to find the longest word.
// use here for of
const words = ["sun", "moon", "stars", "galaxy"];

let longestWord = ""

for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word; 
  }
}

console.log(longestWord); // "galaxy"

