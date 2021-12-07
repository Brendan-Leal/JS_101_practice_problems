const readline = require("readline-sync");

let num1 = readline.question("Enter a positive number: ");
let num2 = readline.question("Enter another positive number: ");

console.log(`${Number(num1)} + ${Number(num2)} = ${Number(num1) + Number(num2)}\n`);
console.log(`${Number(num1)} - ${Number(num2)} = ${Number(num1) - Number(num2)}\n`);
console.log(`${Number(num1)} * ${Number(num2)} = ${Number(num1) * Number(num2)}\n`);
console.log(`${Number(num1)} / ${Number(num2)} = ${Number(num1) / Number(num2)}\n`);
console.log(`${Number(num1)} % ${Number(num2)} = ${Number(num1) % Number(num2)}\n`);
console.log(`${Number(num1)} ** ${Number(num2)} = ${Number(num1) ** Number(num2)}\n`);
