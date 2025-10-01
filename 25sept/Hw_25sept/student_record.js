// 1) student record - (object.freeze)
// create a student object with properties : name,roll no,grade
// freeze the object using object.freeze() 

let studobj ={
    name:'Radika',
    rollno:12113,
    grade:'A++',
    
}

// console.log(studobj)
// freeze it 
Object.freeze(studobj)
studobj.emailid='radhika@gamil.com'
delete studobj.rollno
console.log(studobj)

// output remain same no change occur after freeze 
