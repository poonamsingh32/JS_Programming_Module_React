// object : 

let empobj={
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
    Contact:{
        add:'Pune Maharastra',
        pincode:234544,
        mobno:123456789,

    }
}
console.log(empobj)  // access all data with one varible
// in mongo db it store like this  jason formate data
//any data can add in it
//can object store in object = yes
console.log(empobj.skills)
console.log(empobj.id)
// can add new property here
// existing obj = new val ===== done successfully 
empobj.emailid='xyz@gamil.com'
// can do it for child also inside obj ..
empobj.Contact.emailid='xyz@gamil.com'
//add state and country
empobj.Contact.country='India'
empobj.Contact.state='Madhya pradesh'
console.log(empobj)

let empobj2={
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
    Contact:{
        add:'Pune Maharastra',
        pincode:234544,
        mobno:123456789,

    }
}
console.log(empobj2)
console.log(empobj==empobj2)
// both store object have done comparesion not value bt address that s why it is false 
//also c/d it reference 
//delete it 
delete empobj2.info
console.log(empobj2)

