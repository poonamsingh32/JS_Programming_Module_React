// 8) You are given an array of student records:
const students = [
  { name: "Amit", marks: [80, 75, 90] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Raj", marks: [45, 50, 40] },
  { name: "Pooja", marks: [70, 72, 68] },
  { name: "Karan", marks: [30, 35, 28] }
];

// A) Calculate Total Marks
//Use map + reduce to calculate each student’s total marks.
// reduce=reduces the array to a single value.
const totalMarks = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  return { info: `${student.name} - Total: ${total}` };
});

console.log(totalMarks);

//B) Add total and average to Each Student

//Use map to return a new array where each student object also has a total and average property.
//Example : { name: "Amit", marks: [80, 75, 90], total: 245, average: 81.6 }



//C) Filter Passing Students
//Consider passing if average ≥ 50.
//Use filter to get only the passing students.

//D)Class Topper
//Use reduce to find the student with the highest total marks.

//E) Class Average Marks
//Use reduce to calculate the overall class average.

//F) List of Student Names (Uppercase)
//Use map to create an array of student names in uppercase.
