const user1={
    username:'rajiv',
    userid:1210,
    useradd:{
        city:'pune',
    }
}


const user2={...user1} //shallow copy
console.log(user1)
console.log(user2)
user2.useradd.city='Mumbai'

user2.username='anil'
console.log(user1) 
console.log(user2)

// object.assign used / shallow copy
