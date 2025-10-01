let salary=[20,10,5,4,32]
let result =salary.map((num,index)=>
       {
    
           console.log(`index ${index}=${num*2.5}`)
            return num*2
       })
console.log(result)//its create a new array and store the result of return val or cll back function
console.log(salary) //original array not change anything,don't effect on original array
// foreach loop return nothing , never return anything make original array as it is 
 