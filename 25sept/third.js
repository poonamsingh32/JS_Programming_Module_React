
// object :  operate here using define property

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

console.log(empobj1)
// here don't modify the value
Object.defineProperty(empobj1,'id',{
    writable:false,
    configurable:false,//no one can modify datatype
    
})

empobj1.id=12102  //now it restrict no change can possible 
delete empobj1.id // same 
console.log(empobj1)

