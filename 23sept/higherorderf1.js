//higher order function
function demo(data)
{
    console.log(typeof(data))
    console.dir(data)
    data()
}

// higherorderfunction('Hello Programmer')
// higherorderfunction(23)
// higherorderfunction(true)
// higherorderfunction(null)


function test() // test = cll back function
{
    console.log("i m from test function")
}
demo(test)