//Array
let obj={
    id:12101,
    empname:'rajiv'
}

function display()
{
    console.log('from display function')
}

console.log(typeof(obj))
//           0     1    2    3     4
let arr=['itview',12,true,null,undefined,obj,
    [12,56,89,90],display
]
console.log(arr)
// display here
console.log(arr[4])
console.log(arr[7])

console.log(typeof(arr))
// call a function
console.log(arr[7]()) //() = cll a function print mssg 




