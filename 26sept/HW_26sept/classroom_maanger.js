// D. Classroom Manager
let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];

// 1. Add "Suresh" at the end and "Meena" at the beginning.
students.push('Suresh')
students.unshift('Meena')
console.log(students)
// 2. Remove the first and last student.
console.log(students.shift())
console.log(students.pop())
console.log(students)
// 3. Replace "Raj" with "Rohan" using splice().
students.splice(2,1,'Rohan')
console.log(students)

// 4. Check if "Pooja" exists → if yes, remove her using indexOf().
console.log(students.includes('Pooja'))
// output = true


// remove it
students.splice(students.indexOf("Pooja"),1)
console.log(students)
// output=[ 'Amit', 'Neha', 'Rohan', 'Kiran' ]

// 5. Extract ["Neha", "Rohan"] into a new array.
console.log(students.slice(1,3))
// output = [ 'Neha', 'Rohan' ]

// 6. Merge with another array ["Anita", "Vivek", "Kiran"] using spread.
let newarr=["Anita", "Vivek", "Kiran"]
console.log(newarr)

let final=[...students,...newarr]
console.log(final)
// output= [ 'Amit',  'Neha', 'Rohan', 'Kiran', 'Anita', 'Vivek', 'Kiran']

// 7. Final challenge: Create a deep clone of the final array using spread + slice, modify one element, and prove that original array is not affected.
// deep clone using spread
let deepclone=[...final]

// deep clone using slice
let cloneslice=final.slice()

// modify one element in clone
deepclone[0]="Meet client"

// show arrays now
console.log("original array will be:",final)
console.log("Modify clone(spread) will be: ",deepclone)
console.log("clone using slice will be :",cloneslice)

// output =
// original array will be: [ 'Amit',  'Neha', 'Rohan', 'Kiran', 'Anita', 'Vivek',  'Kiran']
// Modify clone(spread) will be:  [ 'Meet client', 'Neha', 'Rohan', 'Kiran', 'Anita', 'Vivek', 'Kiran' ]
// clone using slice will be : [
//   'Amit',  'Neha',
//   'Rohan', 'Kiran',
//   'Anita', 'Vivek',
//   'Kiran']