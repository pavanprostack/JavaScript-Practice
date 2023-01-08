
// Local Storage

const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "pavan",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name)
    }
}


// To convert string to object
localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// localStorage.clear()
// const item = localStorage.removeItem("myLocalStorage")
// const key=localStorage.key(1)
// const length=localStorage.length;
const storage = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(storage);
// console.log(length);
// console.log(key);
// console.log(item);

// Array
localStorage.setItem("myLocaltorage",JSON.stringify(myArray));
const arrayStorage =JSON.parse( localStorage.getItem("myLocalStorage"));
console.log(arrayStorage);



