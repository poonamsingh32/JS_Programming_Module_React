let salary=[20,10,5,4,32]
let result =salary.forEach((num,index)=>
       {
    
           console.log(`index ${index}=${num*2.5}`)
            return 
       })
console.log(result)
// foreach loop return nothing , never return anything make original array as it is 
 