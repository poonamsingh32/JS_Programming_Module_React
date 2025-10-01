//higher order function
function higherorder(tester)
{
     console.log(" from higher order function");
    tester() //() = cll the function 
   
}



// function tester() // cll back function
// {
//     console.log("from cll back function");
// }


higherorder(tester)