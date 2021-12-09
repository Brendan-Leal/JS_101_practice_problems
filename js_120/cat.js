class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  constructor(name) {
    this.name = name;
    
  }

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }

  rename(newName) {
    this.name = newName;
  }

  personalGreeting() {
    console.log(`Hello my name is ${this.name}`);
  }



}

let kitty = new Cat("Sophie");
console.log(Cat.type);
kitty.personalGreeting();