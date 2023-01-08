
// Web Storage API
// It is not part of DOM. It refers to the Window API.
// Available to javascript via the global variable Window.

// we do not have to type Window. it is implied:

// window.alert(window.location);
// alert(location)

// Session Storage

const myObject={
    name:"pavan",
    logName:function(){
        console.log(this.name)
    }
}

const myArray=["eat", "sleep", "code"];

sessionStorage.setItem("mySessionStorage", myObject)
const storage = sessionStorage.getItem("mySessionStorage");
console.log(storage)
console.log(typeof storage)   // it stores in the form of string.

sessionStorage.setItem("mySessionStorage", myArray)
const storage1 = sessionStorage.getItem("mySessionStorage");
console.log(storage1)
console.log(typeof storage1)  // it stores in the form of string.

// To convert string to object