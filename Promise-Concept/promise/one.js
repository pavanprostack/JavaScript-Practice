// Promises.
// callback hell best solution is Promises.
// A Promise is a javascript object that links producing code and consuming code.

// producing code => it is code that can take some time.
function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10)
        } else {
            reject("Something went wrong")
        }
    })
}
function step2(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10)
        } else {
            reject("Something went wrong")
        }
    })
}
function step3(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10)
        } else {
            reject("Something went wrong")
        }
    })
}

// Consuming code  => it is code that must wait for the result.
step1(10, false)
    .then((result1) => step2(result1, false))  // error is false here
    .then((result2) => step3(result2, false))
    .then((result3) => console.log(result3))
    .catch((error) => console.log(error))