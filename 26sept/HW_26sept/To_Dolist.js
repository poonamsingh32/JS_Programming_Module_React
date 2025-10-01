// C. To do List Manager 
// Start with an empty array todoList = []
let manager=[]
console.log(manager)

// 1. Add 5 tasks using push().
manager.push('approve work','plan task','check team progress','team meeting','project planning')
console.log(manager)

// 2. Remove the last task using pop().
console.log(manager.pop())
// output=project planning

// 3. Add a "Morning Exercise" task at the beginning using unshift().
manager.unshift('Morning Exercise')
console.log(manager)

// 4. Remove the first task using shift().
console.log(manager.shift())
console.log(manager)
// output=Morning Exercise

// 5. Replace the 3rd task with "Doctor Appointment" using splice().
manager.splice(2,1,'Doctor Appointment')
console.log(manager)
// output= before  [ 'approve work', 'plan task', 'check team progress', 'team meeting' ]
//  after [ 'approve work', 'plan task', 'Doctor Appointment', 'team meeting' ]


// 6. Extract the first 3 tasks into a new array using slice().
let newarr=manager.splice(0,3)
console.log("New Array",newarr)
console.log("Remaining Task",manager)
// output =New Array [ 'approve work', 'plan task', 'Doctor Appointment' ]
// Remaining Task [ 'team meeting' ]

// 7. Merge the final list with ["Buy Groceries", "Pay Bills"] using spread.
let finalTasks=["Buy Groceries", "Pay Bills"] 
let mergedTask=[...newarr,...finalTasks]
console.log(mergedTask)
// output=['approve work','plan task','Doctor Appointment','Buy Groceries','Pay Bills']
// Print the array after each operation.