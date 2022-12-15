// Objects
// key-value pairs in curly braces.

// Object Style

const obj = { name: "pavan" }
console.log(obj.name);

// Nested Object
const myObj = {
    alive: true,
    answer: 107,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffe",
        afterNoon: "Iced Tea"
        },
    action:function(){          // Anonymous function
        return `Time for ${this.beverage.morning}`
    }

}

console.log(myObj.alive)
console.log(myObj.answer)
console.log(myObj.hobbies[1])
console.log(myObj.beverage.afterNoon)
console.log(myObj.action())