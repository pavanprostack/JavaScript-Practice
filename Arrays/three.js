// Arrays with splice method.

const myArray=[1001, "pavan", true, "kalyan", 7000]

//how delete element with delete keyword
delete myArray[1]
console.log(myArray)  // here array element is deleted but value is not replaced.
console.log(myArray[1])

// how delete element using splice method
myArray.splice(1,1);
console.log(myArray);
console.log(myArray[1])

// how to delete the array element and replace with another value
myArray.splice(3, 1, 5000)
console.log(myArray)

// how to add element in array using splice method
myArray.splice(2, 0, "pk")
console.log(myArray)

const arr=["A","B","C","D","E","F","G"];
const newArray =arr.splice(2,5)
console.log(newArray)

// reversing order array
const arr1=["A","B","C","D","E","F","G"];
const reverse = arr1.reverse();
console.log(reverse)
