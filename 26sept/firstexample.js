let fruits=['mango','apple','grapes','watermelon']
console.log(fruits)

// 1 push add new element in existing arr
fruits.push('muskmelon')
console.log(fruits)

// 2 pop remove last ele from existing arr
console.log(fruits.pop())
console.log(fruits)

//3 shift ele from arr 
fruits.unshift('muskmelon')
console.log(fruits)
//4  remove first element of arr
console.log(fruits.shift())
console.log(fruits)

// 5 concate :combine two arr ,return the val of combine arr
let myfruits=['muskmelon','banana','cherry','apple']
console.log(myfruits)
console.log(fruits.concat(myfruits))
console.log(fruits)

// 6 indexof() - return index of arry whichever ele we search in arr
console.log(fruits)
// console.log(fruits.indexOf('apple')) // o/p = 1
console.log(fruits.indexOf('muskmelon')) // not present o/p = -1

// 7 includes : it check the if that ele ..
console.log(fruits.includes('grapes')) //true
console.log(fruits.includes('cherry')) //false

console.log(fruits)
console.log(myfruits)

// 8 sort : sort the array element
// operation on original arr
console.log(fruits)
fruits.sort()
console.log(fruits)

// 9 reverse : shows the reverse element store in original arr
fruits.reverse()
console.log(fruits)

// 10 slice:start and end index , exclude end index
// take a subarr of particular size from the existing arr
console.log(fruits.slice(1,3))
console.log(fruits.slice(-2,-3))
console.log(fruits.slice(1))

// 11 splice : remove element from start to end  
console.log(fruits)
// fruits.splice(1,2) // 2 delete 
console.log(fruits.splice(0,3,'banana','cherry')) // also it replace in 3rd parameter 
console.log(fruits)

// interview ques . imp.
// arr do any operation(here property)
//difference b/w splice and slice
// difference b/w split ,slice and substring


