// let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];

let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"]
console.log(students)

// Q1: Add "Suresh" at the end and "Meena" at the beginning.
students.push('Suresh')
students.unshift('Meena')
console.log(students)
// output =['Meena',  'Amit','Neha',   'Raj','Pooja',  'Kiran','Suresh']


// Q2: Remove the first and last student.
console.log(students.shift())
console.log(students.pop())
console.log(students)
// output =[ 'Amit', 'Neha', 'Raj', 'Pooja', 'Kiran' ]


// Q3: Extract ["Raj", "Pooja"] using slice().
console.log(students.slice(2,4))
// output=[ 'Raj', 'Pooja' ]

// Q4: Replace "Raj" with "Rohan" using splice().
students.splice(2,1,'Rohan')
console.log(students)
// output=[ 'Amit', 'Neha', 'Rohan', 'Pooja', 'Kiran' ]




// Q5: Merge this array with ["Anita", "Vivek"] using spread operator.
// Print results after each step.
let arr=["Anita","Vivek"]
console.log(arr)

let finalarr=[...students,...arr]
console.log(finalarr)

// output = [ 'Amit',  'Neha','Rohan', 'Pooja','Kiran', 'Anita','Vivek']