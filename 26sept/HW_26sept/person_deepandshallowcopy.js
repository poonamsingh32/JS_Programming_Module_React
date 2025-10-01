//************* Homework on Deep Copy and Shallow Copy **************
//A) 
let person = {
  name: "Rahul",
  address: { city: "Pune", pincode: 411001 }
};

// let person2 = {
//   name: "Rahul",
//   address: { city: "Pune", pincode: 411001 }
// };
// create deep clone then it will work
let person2 = JSON.parse(JSON.stringify(person))

// TODO: Create a shallow copy of person.
// let person2=person
// this is called shallow copy 
// output = true (create copy its result)
// address are same here in it 
// console.log(person==person2)
// output=false


// TODO: Create a shallow copy of person.
// Then, change only the `city` in the copy.
// let person2={...person} //shallow copy
// console.log(person2)
// console.log(person)

person2.address.city='Mumbai'
console.log(person2)
// output { name: 'Rahul', address: { city: 'Mumbai', pincode: 411001 } }

console.log(person)
// output={ name: 'Rahul', address: { city: 'Pune', pincode: 411001 } }

// Check whether the original object is also affected.
