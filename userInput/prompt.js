// let name = prompt("Please enter your Name")
// console.log(name)

// using Nullish operator

// let data = prompt("Please enter your Name")
// console.log(data??"you did not entered anything")

// validation
// let name = prompt("Please enter your Name");
// if(name){
//     console.log(name);
// }
// else{
//     console.log("you did not entered anything")
// }

let name = prompt("Please enter your Name");
if(name){
    console.log(name.length)
    console.log(name.trim().length)    
    console.log(name.trim())
}else{
    console.log("you did not entered anything")
}