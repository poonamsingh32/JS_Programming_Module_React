function outerfunction(outerPara) {
    let outervariable = 'I am outer variable';
    
    function innerfunction() {
        
        let innervariable = 'inner type of variable';
        console.log('outer parameter',outerPara);
        console.log('outer variable',outervariable); 
       
       
    }

    return innerfunction; 
}

let closure = outerfunction("hello world !"); 
closure();                    
