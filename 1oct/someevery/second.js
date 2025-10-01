let arr=[12,11,14,10,4,8,20,2,12]

console.log(arr)

const result=arr.some((num)=>{
    debugger
    // console.log(num*2);
    return num%2!=0 //o/p = true
    })
    console.log(result);