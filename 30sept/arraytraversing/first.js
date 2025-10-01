let arr=[20,10,5,4,32]
console.log(arr)
// access individual element using here loop
for(let i=0;i<arr.length;i++)
{
    // console.log("arr[",i,"]=",arr[i]) //multiple str concate here or using tillt operator ``
    console.log(`arr[${i}]=${arr[i]}`)
}

//for of one more method
// for (const ele of arr) { //var use must declr here (ele)
    
//     if(ele>5)
//     {
//         console.log(ele);
//     }
    
//     // console.log(ele);
// }

// differe for loop

for (const ele of arr) { 
    //  console.log(ele);
    
    if(ele==5)
    {
        console.log(ele)
        // break //to stop this .
        continue
       
    }
    

    
    
}