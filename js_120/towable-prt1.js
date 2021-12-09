const towMixin = {
  tow() {
    return "I can tow a trailer";
  }
}

class Truck {
  constructor() {
    // Object.assign(this, towMixin); 
    // This way of implementing the mix in makes it so that every instance of truck will have a copy of the tow method
  }
}
Object.assign(Truck.prototype, towMixin);
// By copying the mix in properties to the Truck constructor prototype this ensures that any instances of Truck can find the tow method using prototypal inheritance. 

class Car {}

let truck = new Truck();
console.log(truck.tow());