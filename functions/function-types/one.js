// Normal function
// get username from email

function username(email){
    return email.slice(0, email.indexOf("@"));
}

console.log(username("pavan@gmail.com"))

// Anonymous function
// get username from email

let userName = function(email){
    return email.slice(0, email.indexOf("@"));
}

console.log(userName("kalyan@gmail.com"))


// FatArrow functions
// get username from email

let username1=(email)=>{
    return email.slice(0, email.indexOf("@"))
}

console.log(username1("pk@gmail.com"))
