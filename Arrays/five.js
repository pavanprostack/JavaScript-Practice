// concat() method
// it merges two arrays and return in single array

const arr1=["A","B","C"]
const arr2=["D","E","F"]

const newArray=arr1.concat(arr2)
console.log(newArray);

            //(or)

// using spread operator we can merge two arrays

const data=[...arr1, ...arr2];
console.log(data)