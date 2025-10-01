// *************Array Operation and Deep Copy and shallow Copy Mix Examples  ***********************************
// A.
let employees = [
  { id: 1, profile: { name: "Amit", dept: "HR" } },
  { id: 2, profile: { name: "Neha", dept: "IT" } },
  { id: 3, profile: { name: "Raj", dept: "Finance" } }
];

console.log(employees)
// 1. Add a new employee {id:4, profile:{name:"Pooja", dept:"IT"}} using push().
employees.push({id:4, profile:{name:"Pooja", dept:"IT"}})
console.log(employees)
// 2. Remove the first employee using shift().
employees.shift()
console.log(employees)
// 3. Check if any employee belongs to "Finance" using filter() + includes().
const FinanceEmployees=employees.filter(emp => emp.profile.dept.includes("Finance"))
const FinancePresent=FinanceEmployees.length>0
console.log(`${FinancePresent}`)
// output = true becz raj is already there

// 4. Make a shallow copy of employees and change Neha’s dept to "Admin".
//    → Does it affect original? Why?
let shallow=[...employees]
shallow[0].profile.dept="Admin"
console.log(`shallow copy of neha's  dept is : ${shallow[0].profile.dept}`)

// 5. Make a deep copy of employees and remove Raj from the deep copy.
//    → Verify original is safe.
let deep = structuredClone(employees)
deep.slice(1,1)
console.log(`deep copy includes raj:${deep.some(emp =>emp.profile.name==='Raj')}`)

// 6. Use slice() to copy first two employees into a new array.
let first=employees.slice(0,2)
console.log(first)

// 7. Merge with another list [{id:5, profile:{name:"Sneha", dept:"HR"}}] using spread.
let newone=[{id:5, profile:{name:"Sneha", dept:"HR"}}]
let merged =[...employees,...newone]
console.log(merged)