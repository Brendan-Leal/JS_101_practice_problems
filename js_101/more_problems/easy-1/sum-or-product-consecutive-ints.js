
/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Ask the user for a single positive number and compute the sum or product of
the numbers from 1 to the number provided

EXPECTED INPUT: a numbers

EXPECTED OUTPUT: one Number

RULES:
  EXPLICIT
    - Numbers entered by the user must be positive
    - Give the user the option to add or multiply the numbers.
    - Include 1 and the provided number in the sum or product.

  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
-
-

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: sum --> 5
OUTPUT: 15


EXAMPLE 2: product --> 6
OUTPUT: 720


---------------------------Data Structures and Algorithm------------------------
1. Ask the user for a number
2. validate that the number is greater than 0
  - If not ask the user to reenter a valid number
3. Ask the user if they want to compute the sum or product
  - Validate the users choice
  - If invalid ask the user again untill a valid input is found
4. If they chose product calculate the factorial of the number provided
5. If they chose sum calculate the sum of the numbers from 1 to the provided number
6. Display the results to the console
7.
8.
9.
10.

--------------------------------------------------------------------------------
                              COMPUTING THE SUM
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
//```javascript
let readline = require("readline-sync");
let number;
let operation;

do {
  number =  readline.question("Enter a number greater than 0: ");
  number = parseInt(number, 10);
} while (Number.isNaN(number) || number < 0);

do {
  operation = readline.question("Enter \"s\" to compute the sum, or \"p\" to compute the product: ");
  operation = operation.toLowerCase();

} while (operation !== "s" && operation !== "p" );

if (operation === "p") {
  console.log(`The product of the integers from 1 to ${number} is ${factorial(number)}`);
} else if (operation === "s") {
  let sum = number;

  for (let i = number; i >= 1 ; i--) {
    sum = sum + (i - 1);
  }
  console.log(`The sum of the numbers from 1 to ${number} is ${sum}`);
}

function factorial(n){
  let answer = 1;

  if (n == 1){
    return answer;
  } else {

    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}
