// min()

console.log(Math.min(2, 10, 7))

// find minimum number

var arr = [1,2,3,4,5,6,0.5,7,8,9,10];

var max = Math.min.apply(null, arr);

console.log(max); // Output: 0.5