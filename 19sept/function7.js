let a=10
let b=20

//function hosting
add(a,b) //cll before func.declr.
function add(a,b)
{
    let result=a+b
    console.log(result);
}

// becz func copy in global alredy doesn't matter 
// write it before declr or after will go there and execute 
// it will only in func. declr not for the remaing fucn expression
