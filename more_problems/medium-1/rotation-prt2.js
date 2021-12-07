/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given 2 numbers, the first number is to be manipulated and the second number
tells you how many digits from the end to manipulate. Create a function that
identifies the last x amount of numbers in a digit and rotate the first digit of
that sub-number to the end.

EXPECTED INPUT: 2 numbers

EXPECTED OUTPUT: 1 number

RULES:
  EXPLICIT
    - the second number tells you how many digits from right to left to
    manipulate
    -
    -
  IMPLICIT (What's not stated in the problem?)
  - Maybe use the previous function I wrote to help with the rotation.
  - Leave the rest of the digits unchanged.
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

EXAMPLE 1: 73(5291), 4
1925 37
1925
5291
OUTPUT: 73(2915)


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. Split the number into individual digits.
2. reverse the order of the digits
3. starting from the left count the number of digits to be taken off.
4. save the digits taken off and the remaing digits.
5. reverse both sub-lists of digits
6. take the first digit off the list and append it to the end of the list.
6. join the rotated number list to the end of the remaing number list.
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
function rotateRightmostDigits(number, count) {
  let arrayOfNumbers = String(number).split("").reverse();
  let numbersToManipulate = [];

  for (let i = 0; i < count; i++) {
    numbersToManipulate.push(arrayOfNumbers.shift());
  }

  arrayOfNumbers.reverse();
  numbersToManipulate = rotateArray(numbersToManipulate.reverse())

  let finalResult = arrayOfNumbers.concat(numbersToManipulate).join("");
  console.log(finalResult);
  return finalResult;

}

function rotateArray(array) {
  if (Array.isArray(array) && array.length > 0) {
    let arrayCopy = array.slice();
    let firstElement = arrayCopy[0];

    arrayCopy.shift();
    arrayCopy.push(firstElement);

    return arrayCopy;
  } else if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }
}
// TEST CASES:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
rotateRightmostDigits(42069, 3);
