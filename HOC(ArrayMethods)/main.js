

import users from "./user.js";

// forEach
users.forEach((user) => {
    console.log(user)
})

// Filter
const filteredData=users.filter((user)=>{
    return user.gender==="Male"
})
console.log(filteredData)


// Map
const mappedData=users.map((user)=>{
    return user.name + " : " + user.gender
})
console.log(mappedData)

const multiply=users.map((user)=>{
    return user.id*10
})
console.log(multiply)

// Reduce
const reducedData=multiply.reduce((sum , multiple)=>{
   
    return sum+multiple
})
console.log(reducedData)