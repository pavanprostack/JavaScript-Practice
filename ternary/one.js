// Ternry Operator

// Syntax 
// Condition ? IfTure : IfFalse;

let soup = "Chicken noodle soup"
let isCustomerBanned = false;

let response = isCustomerBanned ? "Your Banned" 
: soup ? `your ${soup} is ready` : " Sorry, no soups available today";

console.log(response)