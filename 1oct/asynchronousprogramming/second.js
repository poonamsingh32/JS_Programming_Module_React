// function of browser , written for js bt not a function for js
// setimeout = asyncrous..
// here multiple set time out
// setTimeout(`console.log("Hi=1")`,5000) //after 2 sec. it will work /shows
// setTimeout(`console.log("Hi=2")`,3000) // 3 sec means , first do less time execution
// setTimeout('console.log("Hi=3")',2000)

let timer1=setTimeout(`console.log("Hi=1")`,3000) 
let timer2=setTimeout(`console.log("Hi=2")`,5000) 
let timer3=setTimeout('console.log("Hi=3")',10000)


// clearTimeout = stop setinterval also set timeout
// bt clearinterval use to stop for set interval

// in console
// setTimeout(`console.log("Hi=1")`,1000)
// 5 = id of timer they define differe id for timers then execute code
// VM159:1 Hi=1

// to clear a timer / stop using clearTimeOut using its id of timer
