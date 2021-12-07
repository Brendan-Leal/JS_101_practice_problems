let readline = require("readline-sync");
let age = readline.question("What is your age: ");
let retirementAge = readline.question("What age would you like to retire: ");
let currentYear = new Date().getFullYear();
let retirementYear = (retirementAge - age) + currentYear;

console.log(`It's ${currentYear}, you will retire in ${retirementYear}.`);
console.log(`You have ${retirementAge - age} years to go.`);
