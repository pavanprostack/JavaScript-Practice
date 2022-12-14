// keywords


// global scope
var x=1;
let y=2;
const z=3;


// local scope (function)
function myFunc(){
    console.log(z)

    // block scope
    {
        let y=5;
        console.log(y)
    }
}
myFunc()