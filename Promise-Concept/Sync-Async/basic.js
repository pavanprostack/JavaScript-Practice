// Async & Await

// Synchronous
console.log("Statemet-1")
console.log("Statemet-2")
console.log("Statemet-3")

// Asynchronous
console.log("Statement-1")
setTimeout(()=>{
    console.log("Statement-2")
}, 1000)
console.log("Statement-3")