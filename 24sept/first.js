let str='Itview2 solution'
console.log(str)
console.log(typeof(str))
console.log(str.length) //length property not a func cause not use () here

console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str.trim()) // remove space starting and ending only

console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str) // no effect in original str


let str2='Pune'
console.log(str.concat(str2)) //combine 2 str
console.log(str) 

console.log(str.includes(str2))




console.log(str.indexOf('w'))
console.log(str.indexOf('z')) 
console.log(str.indexOf(str2))
console.log(str.indexOf('solution'))
console.log(str.replace('i','b'))
console.log(str.replace('o','b'))
console.log(str.replaceAll('o','b'))
console.log(str) 
console.log(str.replace('solution','Technology'))  
// masking or hiding 19229******* 90 like this
let addharnumber='2345'
console.log(addharnumber.padStart(12,'*'))
// o/p=********2345

// for ending
console.log(addharnumber.padEnd(12,'#'))

//str = 'itview solution'
let result=str.split(" ")
// console.log(result)
console.log(result[0])
console.log(str)


// slice function = same as slicing or break in a parts
// ḍefine from where to end 
console.log(str)
console.log(str.slice(0,5))
// store it for further operation
let result1=str.slice(6,9) // should get 2 5 bti get w s
console.log(result1)
console.log(str.slice(0,-1))
console.log(str.slice(-2,-1)) // -1 exclude
console.log(str.slice(-3,-4))
console.log(str)

// substring= funct also return the substr val. func given i/p str
// bt they don't operate on -ve val of parameter


// console.log(str.substring(0,5)) //Itvie
// console.log(str.substring(6,9))// 2 s 


// console.log(str)
// console.log(str.substring(0,-1))
console.log(str.substring(3,-4))//value interchange internally
console.log(str.substring(5,-2))
console.log(str.substring(2,4))
console.log(str.substring(4,2))
console.log(str.substring(-2,-3)) //invalid range

console.log(str.slice(2))
console.log(str.substring(2))



