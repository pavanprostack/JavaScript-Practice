

const vehicle = {
    wheels:4,
    engine:function(){
        return "vehicle engine"
    }
}


const truck = Object.create(vehicle); 
truck.doors=2
console.log(truck)
console.log(truck.wheels)  // inheritance
console.log(truck.engine())


const car = Object.create(vehicle)
car.doors=4;
console.log(car);
car.engine = function(){
    return "car engine"
}
console.log(car.engine());
console.log(car.wheels)
