/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- If 2 sides of a triangle are eqaul determin if the sum of the 2 shorter sides
is greater than the logest side

EXPECTED INPUT: 3 numbers

EXPECTED OUTPUT: boolean true or false

RULES:
  EXPLICIT
    -
    -
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


-------------------------Data Structures and Algorithm--------------------------
1. sort the sides numerically from least to greatest
2. add the first 2 sides store the value
3. compare the sum of the first 2 sides to the last side
4.
5.
6.
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
function triangle(side1, side2, side3) {
  let triangleSides = [side1, side2, side3];

  if (isValidTriangle(triangleSides)) {
    if (isEqualateral(side1, side2, side3)) {
      console.log("equilateral");
    } else if (isIsosceles(side1, side2, side3)) {
      console.log("isosceles");
    } else {
      console.log("scalene");
    }
  } else {
    console.log("Invalid");
  }
}

function isEqualateral(side1, side2, side3) {
  return side1 === side2 && side1 === side3;
}

function isIsosceles(side1, side2, side3) {
  if (side1 === side2 && side1 !== side3) {
    return true;
  } else if (side2 === side3 && side2 !== side1) {
    return true;
  } else if (side1 === side3 && side2 !== side1) {
    return true;
  } else {
    return false;
  }
}

function isValidTriangle(triangleSides) {
  if (triangleSides[0] <= 0 || triangleSides[1] <= 0 || triangleSides[2] <= 0) {
    return false;
  } else {
    triangleSides.sort((a,b) => a - b);
    return triangleSides[0] + triangleSides[1] > triangleSides[2];
  }
}

// TEST CASES:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


/*
3,3,1
1,3,3
3,1,3

*/
