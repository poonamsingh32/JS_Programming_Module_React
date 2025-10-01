//     
function counter()
{
    console.log("from higher order function")
    // let count=0
    return counterdisplay
}

function counterdisplay()
{
    // count++
    console.log("from fucntion counter display")
}
// console.log(counter());
// counter()
let result=counter()
console.log(result());