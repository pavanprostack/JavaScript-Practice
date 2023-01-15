
// Callback
// While executing function we are passing function as a argument to another function is nothing but callback.

/*
1. Passing 10 as the initial value to step1.
2. if there is no error, then passing the result to step2.
3. if there is no error again, then passing the result to step3.
4. finally printing the result.   */

step1(10, function (result1, error) {
    if (!error) {
        step2(result1, function (result2, error) {
            if (!error) {
                step3(result2, function (result3, error) {
                    if (!error) {
                        console.log("Result" + ":" + result3)  // this triangle shape called as calback hell.
                    }
                })
            }
        })
    }
})

function step1(value, callback) {
    callback(value + 10, false)
}
function step2(value, callback) {
    callback(value + 10, false)
}
function step3(value, callback) {
    callback(value + 10, false)
}
