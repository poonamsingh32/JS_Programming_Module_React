function counter()
{
    console.log("from higher order fucntion")
    let count=0
    return ()=>
    {
        count++
        console.log("from fucntion  counter display")
    }
}
let result=counter()
console.log(result());