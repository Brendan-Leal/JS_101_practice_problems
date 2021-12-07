/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Display a right triangle of n stars.

EXPECTED INPUT: Int

EXPECTED OUTPUT: String

RULES:
  EXPLICIT
    - hypotenuse should have one end at the lower-left of the triangle, and the
    other end at the upper-right.
    -
    -
  IMPLICIT (What's not stated in the problem?)
  - No spaces inbetween stars
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

EXAMPLE 1: 5
OUTPUT:
    *
   **
  ***
 ****
*****


EXAMPLE 2:
OUTPUT:


---------------------------Data Structures and Algorithm------------------------
1. Create a function that takes an int N as an argument.
2. create a vaiable that holds the value of a "*" char
3. create an array that holds blank spaces.
  - the first element should hold n - 1 spaces
  - the second element should hold n - 2 spaces
  - etc until you reach N elements
4. Create an array the holds "*" chars
  - the first element should hold 1 stars
  - the second should hold 2 stars
  - etc until you reach N elements
5. display the first element in the spaces array concatenated with the first
elemnent in the stars array.
  - repeat until you display N rows.
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
function triangle(numb) {
  let star = "*";
  let space = ""
  let starsArray = [];
  let spacesArray = [];

  for (let i = 0; i < numb; i++) {
    starsArray.push(star);
    star += "*"
  }

  for (let i = 0; i < numb; i++) {
    spacesArray.push(space);
    space += " "

  }

  spacesArray.reverse();

  for (let i = 0; i < numb; i++) {
    console.log(spacesArray[i] + starsArray[i]);
  }
}


// TEST CASES:
triangle(5);
triangle(9);
