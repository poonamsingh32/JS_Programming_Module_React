function multiplyBy(n)
 {
  
    return (value) =>
        {
       
            return value*n;
        }
}

let result = multiplyBy(5);  
console.log(result(10)); 