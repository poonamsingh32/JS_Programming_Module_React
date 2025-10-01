// here is it asynchronous
console.log('Hi=1');

function display()
{
    console.log('Hi=2');
}

setTimeout(display,3000)  // delay it before it display h2 
for(let i=0;i<5;i++)
{
    console.log(i)
}


display()
console.log('Hi=3');  


// interview ques
// event loop
// ansyn..p
// call stack
// csll back queue

// inbuilt higher order function in js map ,settimeout,filter etc