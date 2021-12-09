const readline = require("readline-sync");

let name = readline.question("What is your name? \n");

if (name.includes("!")) {
  console.log(`HELLO, ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
