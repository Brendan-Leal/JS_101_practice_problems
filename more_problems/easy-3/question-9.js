/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a string remove any non alphbetic characters and replace them with a
space string.

EXPECTED INPUT: string

EXPECTED OUTPUT: string

RULES:
  EXPLICIT
    - the result string should never have consecutive spaces
    - remove non alphbetic characters
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

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


---------------------------Data Structures and Algorithm------------------------
1. Create a collection to hold the alphabet
2. create an empty array to store the final result.
3. Split the string into an array of characters
4. Starting at the first character test to see if it is in the alphabet
    - If NOT in the alphabet
        I.) The current character is not in the alphabet AND the next character
        is not in the alphabet
          - continue to III or 5.
        III.) The next character IS in the alphabet and is NOT equal to the
      prevous one. (ex $, k)
          - add a space to the final result.

5.    - If the current character is in the alphabet
        I.) add the current character to the final result.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
function cleanUp(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let finalResult = [];
  let array = str.split("");

  for (let i = 0; i < array.length; i++) {
    let currentChar = str[i];
    let nextChar = str[i + 1];

    if (!alphabet.includes(currentChar) && !alphabet.includes(nextChar)) {
      continue;
    } else if (!alphabet.includes(currentChar) && alphabet.includes(nextChar)) {
      finalResult.push(" ");
    } else {
      finalResult.push(currentChar);
    }
  }
  console.log(finalResult.join(""));
  return finalResult.join("");
}


// TEST CASES:
cleanUp("---what's my +*& line?");    // " what s my line "
