class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Bob");

console.log(person1.name);
console.log(person2.name);