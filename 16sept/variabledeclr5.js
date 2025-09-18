var a= 10  //global
                       //can  receclare with same name var a=20
 console.log(a) //10

function display()
{
    console.log(a)  // undefined
    // var a=20
    console.log(a) //20
}
display()
console.log(a) // 10
