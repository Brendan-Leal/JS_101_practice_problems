/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a number create a string of 1s and 0s. The string should be as long as
the number provided.

EXPECTED INPUT:

EXPECTED OUTPUT:

RULES:
  EXPLICIT
    - Start the string with a 1
    - String is the length of the number passed into the function.
    -
  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
-
-
-

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: 6
OUTPUT: "101010"


EXAMPLE 2: 9
OUTPUT: "101010101"


---------------------------Data Structures and Algorithm------------------------
1. create a variable that will hold the final return value initialize it with
the string "1"
2. Start a loop that will terminate after the specified number of times
3. append the string "0"
4. append the string "1"
5. continue steps 3 & 4 unill youre loop condition terminates
6. return the final result.
7.
8.
9.
10.

--------------------------------------------------------------------------------
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
function stringy(numb) {
  let pseudoBinary = "1";

  for (let counter = 0; counter < numb - 1; counter++) {
    counter % 2 === 0 ? pseudoBinary += "0" : pseudoBinary += "1";
  }
  console.log(pseudoBinary);
  return pseudoBinary;
}


// TEST CASES:
stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(3); // "1010101"
