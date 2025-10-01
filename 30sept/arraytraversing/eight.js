let salary=[20,10,5,4,32]
// find out max and min element of given array - hw
//                previous val currrent ele
// let result=salary.reduce((sum,ele)=>{return sum=sum+ele},0 )
let result=salary.reduce((max,ele)=>{return ele>max?ele:max} ) //? ternanry operator for check condition
console.log(result)