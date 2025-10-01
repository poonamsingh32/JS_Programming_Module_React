debugger
// those take less time execute it first then do next execution of time taken code 
// not follow the sequence of code to run website properly 
// use in any development imp . 
// set time out use make it asynch..
console.log('Hi=1');

for(let i=0;i<5;i++)
{
    console.log(i)
}
function display()
{
    console.log('Hi=2');
}
display()
console.log('Hi=3');         