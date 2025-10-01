//c)
let company = {
  name: "TechCorp",
  departments: {
    hr: { employees: 5 },
    dev: { employees: 20 }
  }
};

// TODO: Use structuredClone to deep copy `company`.
let company1=structuredClone(company)
// Increase employees in dev department in copied object.
company1.departments.dev.employees+=4
// compound assignment operator  it takes the current value 20 of employees
// and adds 4 to it also set the new value to it i.e 24 
// Verify that original company object does not change.
console.log(" here copied object of company1 will be ")
console.log(company1.departments.dev.employees)
// output = 24 increase from before 20 

console.log("\n original object of company will be ")
console.log(company.departments.dev.employees)