// object : 

let empobj1={
    id:12101,
    empname:'Rajiv',
    jobrole:'Software engineer',
    experience:12,
    city:'Pune',
    // key:val
    info:function (){
        console.log('Employee from Infosys')
    },
    //add Array
    skills:['python','JS','React.Js','DBMS'],
    // object inside object
    Contact:{
        add:'Pune Maharastra',
        pincode:234544,
        mobno:123456789,

    }
}
console.log(empobj1)  // access all data with one varible
// in mongo db it store like this  jason formate data
//any data can add in it
//can object store in object = yes


// both store object have done comparesion not value bt address that s why it is false 
//also c/d it reference 

//delete it 
// delete empobj2.info
// console.log(empobj2)


empobj1.Contact.emailid='xyz@gmail.com'
console.log(empobj1)


// if this data is secured unable to perform the data

// with the help of freeze the obj everything inside it freeeze
Object.freeze(empobj1)
delete empobj1.experience
console.log(empobj1)

