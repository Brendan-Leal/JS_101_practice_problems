let readline = require("readline-sync");
let numbers = [];

for (let i = 0; i < 6; i++) {
  let setNumber = readline.question(`Enter a number (${i + 1}/6): `);
  numbers.push(setNumber);
}

let lastNumber = numbers[numbers.length - 1];
let firstFiveNumbs = numbers.splice(0, 5);

if (firstFiveNumbs.includes(lastNumber)) {
  console.log(`the number ${lastNumber} appears in ${firstFiveNumbs}`);
} else {
  console.log(`the number ${lastNumber} does NOT appear in ${firstFiveNumbs}`);
}
