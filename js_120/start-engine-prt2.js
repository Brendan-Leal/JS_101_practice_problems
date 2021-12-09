class Vehicle {
  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return super.startEngine() + ` Dive ${speed} please!`; 
    // We can call the startEngine method in the parent class within the Truck class by using super
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));