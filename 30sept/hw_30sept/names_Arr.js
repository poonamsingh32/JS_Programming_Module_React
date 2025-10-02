// 7) Extract Names from Objects
const users = [
  { name: "Amit", age: 20 },
  { name: "Neha", age: 25 },
  { name: "Raj", age: 30 }
];
// Filter Adults
// From the above users array, use filter to get people with age >= 25.
// for in 

const adultNames = [];

for (const i in users) {
  if (users[i].age >= 25) {
    adultNames.push(users[i].name);
  }
}

console.log(adultNames);
// ["Neha", "Raj"]
