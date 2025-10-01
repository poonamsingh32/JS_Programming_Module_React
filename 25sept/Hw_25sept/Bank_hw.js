//bank account security
// create a bankaccount object with properties:
// accountnumber , holdername,balance

let bankaccount={
    accountNumber:1234567892,
    holderName:'Krish Bihare',
    balance:450000,

}

console.log(bankaccount)

Object.seal(bankaccount)
bankaccount.city='Pune'
console.log(bankaccount)

// output after applying seal
//{
//   accountNumber: 1234567892,
//   holderName: 'Krish Bihare',
//   balance: 450000
// }

