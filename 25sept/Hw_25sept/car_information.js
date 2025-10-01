// 2) create a car object with properties:brand,model and year
// seal the object using object.seal()

let carobj={
    brand:'Mercedes-Benz',
    model:'CLA',
    year:2024
}

// console.log(carobj)

Object.seal(carobj)
carobj.year=2025
console.log(carobj)

// output after seal:
// { brand: 'Mercedes-Benz', model: 'CLA', year: 2025 }
// year is changed now 
