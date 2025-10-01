let globalvariable = 'I am script / global variable';

function outerfunction() {
    let outervariable = 'I am outer variable';
    console.log('from outer function');
    console.log(outervariable);

    function innerfunction() {
        
        let innervariable = 'I am inner type of variable';
        console.log('from inner function');
        console.log(innervariable);
        console.log(outervariable); 
        console.log(globalvariable); 
    }

    return innerfunction; 
}

let result = outerfunction(); 
result();                    
