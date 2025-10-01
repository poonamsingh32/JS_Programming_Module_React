// E) 
let users = [
  { id: 1, profile: { name: "Amit", age: 25 } },
  { id: 2, profile: { name: "Sneha", age: 28 } }
];

// TODO: Create a shallow copy and a deep copy of users.
let shallowcopy =[...users]

// create deep copy
let deepcopy = structuredClone(users)

// In shallow copy → change age of first user.
shallowcopy[0].profile.age=28

// In deep copy → change name of second user.
deepcopy[1].profile.name="Reta"
// Observe which changes affect original array.
console.log("Original Array here(users) after modifications")
console.log(`user 1 age:${users[0].profile.age}`)
console.log(`user 2 Name:${users[1].profile.name}`)

console.log("shallow copy array of shallowcopy ")
console.log(`user 1 age:${shallowcopy[0].profile.age}`)

console.log("deep copy array of deepcopy ")
console.log(`user 1 age:${deepcopy[1].profile.name}`)

// output
// Original Array here(users) after modifications
// user 1 age:28
// user 2 Name:Sneha
// shallow copy array of shallowcopy
// user 1 age:28
// deep copy array of deepcopy
// user 1 age:Reta