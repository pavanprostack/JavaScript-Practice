// number Methods

// 1. Number()

console.log(Number("pavan"))     // NAN
console.log(Number(undefined))   // NAN
console.log(Number(true))        // 1
console.log(Number(false))       // 0

// 2. isInteger()

let number = 42
let float = 42.0
let string = "42"

console.log(Number.isInteger(number))      // true
console.log(Number.isInteger(float))       // true
console.log(Number.isInteger(string))       // false


// 3. parseFloat()

console.log(Number.parseFloat(42))                       // 42
console.log(Number.parseFloat(42.01))                    //42.01
console.log(Number.parseFloat("42.1234abc"))             //42.1234
console.log(Number.parseFloat("42.1234abc").toFixed(1))  // 42.1



// 4. parseInt()

console.log(Number.parseInt(42))                       // 42
console.log(Number.parseInt(42.01))                    //42.01
console.log(Number.parseInt("42.1234abc"))             //42.1234