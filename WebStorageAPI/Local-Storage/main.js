

const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "pavan",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name)
    }
}


// To convert string to object
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
const storage = JSON.parse(sessionStorage.getItem("mySessionStorage"));
console.log(storage);

// Array
sessionStorage.setItem("mySessionStorage",JSON.stringify(myArray));
const arrayStorage =JSON.parse( sessionStorage.getItem("mySessionStorage"));
console.log(arrayStorage);



