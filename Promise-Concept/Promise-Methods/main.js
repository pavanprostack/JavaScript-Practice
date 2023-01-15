// Promise-Methods

const p1= Promise.resolve("Hi, This promise methods");
const p2= 100;
const p3= new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, "This is best example")
});
const p4=Promise.reject("Rejected")

// 1. all() => It print all promises
Promise.all([p1,p2,p3]).then((values)=>console.log(values)); 

// 2. race() => it print 1st promice in array that is anyone only.
Promise.race([p1,p2,p3]).then((values)=>console.log(values));

// 3. allSettled() => it gives status and value 
Promise.allSettled([p1,p2,p3,p4]).then((values)=>console.log(values));

// 4. any() => it gives any one resolve value.
Promise.any([p4,p3]).then((values)=>console.log(values))