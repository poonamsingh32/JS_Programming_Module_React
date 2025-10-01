// some = traverse each ele of arr with help of cll back func
// also perform operation
// null falsy val = false
// num , str = val t or f , here true shows its falsy val 
// return either true or false, if anyone of the element of array satisfied the condition of call back function satisfied
// first time then they return true otherwise check for every element of array and return false 
let arr=[14,10,4,8,20,2,12]

console.log(arr)

const result=arr.some((num)=>{
    debugger
    // console.log(num*2);
    return num>15 //o/p = true
    })
    console.log(result);