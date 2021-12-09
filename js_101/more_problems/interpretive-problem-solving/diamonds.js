/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Write a function that displays a four-pointed diamond in an
nxn grid, where n is an odd integer supplied as an argument to the function. You
may assume that the argument will always be an odd integer.

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given an integer n generate a diamond pattern that is n high and n long

EXPECTED INPUT: Integer

EXPECTED OUTPUT: strings in a diamond pattern

RULES:
  EXPLICIT
    - assume that the argument will always be an odd integer
    - diamond is n high and n long
    -
  IMPLICIT (What's not stated in the problem?)
    - Each row shows an odd number of *
    -
    -

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: diamond(9);

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


EXAMPLE 2: 5
OUTPUT:
  *
 ***
*****
 ***
  *


------------------Data Structures and Algorithm--------------------
- generate a sequence of numbers 1, 3, 5,...n, n-2,..., 1
- Use the sequence of numbers to represent the number of stars in each row.
  - For each number in the sequence print out (n-number) / 2 and number of stars
-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------
function diamond(number) {
  let sequence = generateSequence(number);

  sequence.forEach((numbOfStars) => {
    let lineLength = ((number - numbOfStars) / 2) + numbOfStars;
    let starLine = setStarLine(numbOfStars);

    starLine = starLine.padStart(lineLength, " ");
    console.log(starLine);
  });
}

function setStarLine(numbOfStars) {
  const STAR = "*";
  let line = "";

  for (let i = 0; i < numbOfStars; i++) {
    line += STAR;
  }
  return line;
}

function generateSequence(number) {
  let sequence = [];

  for (let starCount = 1; starCount <= number; starCount += 2) {
    sequence.push(starCount);
  }
  return sequence.concat(sequence.slice(0, sequence.length - 1).reverse());
}

// TEST CASES:
// diamond(1);
// logs
//*

diamond(3);
// logs
//  *
// ***
//  *

 // diamond(9);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

    */

// diamond(56)
