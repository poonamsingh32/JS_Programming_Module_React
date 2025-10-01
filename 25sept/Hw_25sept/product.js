let productobj={
    id:111,
    name:'Panasonic LED TVs',
}
console.log(productobj)
Object.defineProperty(productobj,'price',{
    value:35000,
    writable:false,
    configurable:false,
    enumerable:true,   
})
console.log(productobj)

productobj.price=36000
delete productobj.price
console.log(productobj)

// output after defineproperty 
// { id: 111, name: 'Panasonic LED TVs', price: 35000 }
// { id: 111, name: 'Panasonic LED TVs', price: 35000 }
