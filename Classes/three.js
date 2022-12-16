// How to push elements into Array using get(), set() methods.

class Pizza {
    constructor(){
        this.topings=[]
    }
    getTopings(){
        return this.topings
    }
    setTopings(toping){
        this.topings.push(toping);
    }
}
const myPizza=new Pizza();
myPizza.setTopings("sausage");
myPizza.setTopings("olives");
myPizza.setTopings("chicken");
myPizza.setTopings("punnier");

console.log(myPizza.getTopings())
