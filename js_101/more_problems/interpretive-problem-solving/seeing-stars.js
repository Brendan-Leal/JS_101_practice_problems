/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Write a function that displays an 8-pointed star in an
NxN grid, where N is an odd integer that is supplied as an argument to the
function. The smallest such star you need to handle is a 7x7 grid
(i.e., when N is 7).

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Display an 8 pointed star based of the function argument.

EXPECTED INPUT: Number

EXPECTED OUTPUT: Strings

RULES:
  EXPLICIT
    - N is greater than of equal to 7
    - N is an odd integer
    -
  IMPLICIT (What's not stated in the problem?)
    - Each line has 3 stars except for the center line which has N stars.
    -
    -

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: star(7);
logs

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *


EXAMPLE 2: star(9);
logs

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

------------------Data Structures and Algorithm--------------------
- Compute the value of the index of the middle row—the integer division o
size / 2—and store the result in a variable, middleIdx.
- Iterate starting from the index of the first row (0) up to but not including
the middleIdx. For each row:

    Initialize an array of three asterisks.
    Join the asterisks in the array together with ((size - 3) / 2) - current
    iteration number of spaces.
    Pad the left side with current iteration number of spaces.
    Log the row.

- Log a row of size number of asterisks and no spaces.
- Iterate starting from the middleIdx + 1 up to the index of the last row
(size - 1). For each row:

    Initialize an array of three asterisks.
    Join the asterisks in the array together with current iteration number of
    spaces.
    Pad the left side with ((size - 3) / 2) - current iteration number of spaces
    Log the row.

-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------
function star(size) {

  printHalfOfStar(size, true);
  printMiddleRow(size);
  printHalfOfStar(size, false);
}

function printHalfOfStar(size, isTopHalf) {
  let middleIdx = Math.floor(size / 2);
  let starRow = ["*", "*", "*"];

  if (isTopHalf) {
    for (let rowNumber = 0; rowNumber < middleIdx; rowNumber++) {
      let spaces = setSpaces(size, rowNumber);
      let row = padLeftSide(starRow.join(spaces), rowNumber);
      console.log(row);
    }
  } else {
    let row = [];
    for (let rowNumber = 0; rowNumber < middleIdx; rowNumber++) {
      let spaces = setSpaces(size, rowNumber);
      row.push(padLeftSide(starRow.join(spaces), rowNumber));
    }
    row = row.reverse().forEach((item) => {
      console.log(item);
    });
  }
}

function printMiddleRow(size) {
  let middleRow = "";
  for (let i = 0; i < size; i++) {
    middleRow += "*";
  }
  console.log(middleRow);
}

function padLeftSide(rowWithSpaces, row) {
  let targetLength = rowWithSpaces.length + row;
  return rowWithSpaces.padStart(targetLength, " ");
}

function setSpaces(size, row) {
  let spaces = "";
  let targetLength = ((size - 3) / 2) - row;

  for (let i = 0; i < targetLength; i++) {
    spaces += " ";
  }
  return spaces;
}


// TEST CASES:
// star(7);
// star(9);
