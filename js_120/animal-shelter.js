function Pet(type, name) {
  this.type = type;
  this.name = name;
}

function Owner(name) {
  this.name = name;
  this.petsOwned = [];
}
Owner.prototype.numberOfPets = function () {
  return this.petsOwned.length;
}

function Shelter() {
  this.owners = [];
}
Shelter.prototype.adopt = function (owner, pet) {

  if (this.owners.includes(owner)) {
    let index = this.owners.findIndex(element => element === owner);
    this.owners[index].petsOwned.push(pet)

  } else {
    owner.petsOwned.push(pet)
    this.owners.push(owner);
  }

}

Shelter.prototype.printAdoptions = function () {
  this.owners.forEach(owner => {
    console.log(`${owner.name} has adopted the following pets:`);
    owner.petsOwned.forEach(pet => {
      console.log(`a ${pet.type} named ${pet.name}`);
    });
    console.log();
  });
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding = new Pet('cat', 'Pudding');
let darwin = new Pet('bearded dragon', 'Darwin');
let kennedy = new Pet('dog', 'Kennedy');
let sweetie = new Pet('parakeet', 'Sweetie Pie');
let molly = new Pet('dog', 'Molly');
let chester = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);