
// functions provides reusable codes.

// without arguments
function sum(){
    return 2+2
}
console.log(sum())

// with arguments
function sum1(num1){
    return num1+3
}
console.log(sum1(4))

// with two arguments
function sum2(num1, num2 ){
    return num1+num2;
}
console.log(sum2(2,6))

// two arguments with one parameter
function sum3(num1, num2){
    if(num2===undefined){
        return num1+num1
    }
    return num1+num2
}
console.log(sum3(10))