let obj={
    sname:'rajiv',
    sid:22101
}

console.log(obj)
// not applicable on obj . only for array 
// individual ele access
// for (const ele of obj){
//     console.log(ele)
// }

// o/p= obj is not iterable 

// do this 
//key stduent name ,stu id

let laptop={
    type:'Dell',
    price:22000

}
for (const key in obj) {
    // console.log(key) //to print key val now
    // console.log(obj[key]) //now vsl come want key and vsl both print
    console.log(`key${key}:${obj[key]}`) //to print both , to change some info,, like account no hide print only name

    
}

for (const key in laptop) {
    // console.log(key) //to print key val now
    // console.log(obj[key]) //now vsl come want key and vsl both print
    console.log(`key${key}:${laptop[key]}`) //to print both , to change some info,, like account no hide print only name

    
}