// classes with get() & set() methods

class Pizza {
    constructor(pizzaType, pizzaFlavour) {
        this.type = pizzaType;
        this.flavour = pizzaFlavour;
        this.crust = "Original"
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust
    }
}
const myPizza = new Pizza("medium", "chicken");
console.log(myPizza);
console.log(myPizza.type);

myPizza.setCrust("thin");
console.log(myPizza.getCrust()); 



