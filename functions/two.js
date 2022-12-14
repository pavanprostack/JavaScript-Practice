// change string in capitalized format

let string=(name)=>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(string("pavankalyan"))
console.log(string("pAVaNKalYan"))