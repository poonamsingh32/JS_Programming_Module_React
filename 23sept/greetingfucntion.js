// WAF geeting that takes a name as a parameter and returns another function
// when the returend functin is called , it should print : hello yourname

function greeting(name) {

    function innerfunction() {
        console.log("hello " + name);
    }

    return innerfunction; 
}

let result = greeting('Jeva'); 
result();                    
