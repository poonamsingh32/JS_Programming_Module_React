// every ele should satisfied otherwise it shows false
// it  is opposite of some 
// let arr=[12,14,10,16,11,2,12] o/p - false ,here 16 is greater bt doesn't matter every should satisfy here
let arr=[16,18,25,30,35,23,34] //o/p -true , every ele satisfy condition


console.log(arr)

const result=arr.every((num)=>{
    debugger
   
    return num>15 
    })
    console.log(result);