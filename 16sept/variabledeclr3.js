var a= 10  //global

console.log(a) //10
a=20
function display()
{
    // a=20
    console.log(a) //10
}
display()
console.log(a) //10