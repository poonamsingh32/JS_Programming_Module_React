// 4) Given an array of numbers, create a new array that contains the squares of only the odd numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddSquare = []

for (const num of numbers) {
  if (num % 2 !== 0) {
    oddSquare.push(num * num);
  }
}

console.log(oddSquare)
// [1, 9, 25, 49, 81]
