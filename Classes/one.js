// classes

class Pizza {
    constructor() {
        this.type = "pizza"
        this.cost = 99
    }
    bake() {
        return this.taste = `${this.type} with cost of ${this.cost}`
    }
}
const myPizza = new Pizza()
console.log(myPizza);
console.log(myPizza.type)
console.log(myPizza.bake())