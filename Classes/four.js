// Inheritance

class Parent {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.flavour = "Chicken"
    }
    getFlavour() {
        return this.flavour
    }
    setFlavour(type) {
        this.flavour = type
    }
}

class Child extends Parent {
    constructor(pizzaSize){
        super(pizzaSize);
        this.cost=99;
    }
    slice(){
        console.log(`I need ${this.flavour} pizza for a ${this.cost} rupees.`)
    }
}

const pizza = new Child("medium");
pizza.slice();

pizza.setFlavour("Rounded");
console.log(pizza.getFlavour());
