function createCounter()
{ 
    
    let count=0

    return function()
    {
        count++
        return count
    }
}
let result=createCounter()
console.log(result())