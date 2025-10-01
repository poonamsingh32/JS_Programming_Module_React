
// need some permission to change some property in it

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


// for need some property change 
// using seal after freeze
Object.seal(empobj1)
empobj1.city='Mumbai'
console.log(empobj1)
empobj1.Contact.email='xyz2gmail.com'



