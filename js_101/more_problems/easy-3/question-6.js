let readline = require("readline-sync");
let noun1 = readline.question("Enter a noun: ");
let adjective = readline.question("Enter an adjective: ");
let noun2 = readline.question("Enter a noun: ");

console.log(`After hiding the painting in his ${noun1} for 2 years, he grew
${adjective} and tried to sell it to a/an ${noun2} in Florence but was caught.`);
