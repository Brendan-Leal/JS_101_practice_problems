//Write a function that will take a short line of text, and write it to the console log within a box.

//

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- create a function that logs a string in it's own box

EXPECTED INPUT: string

EXPECTED OUTPUT: string

RULES:
  EXPLICIT
    - format the string in a box
    -
    -
  IMPLICIT (What's not stated in the problem?)
  - function called with an empty sting returns an empty box
  - box is three lines high
  -

QUESTIONS:
- Is the box always 3 lines high?
-
-

MENTAL MODEL:
-
-
--------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: example logInBox('To boldly go where no one has gone before.');
OUTPUT:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+


EXAMPLE 2:
OUTPUT:


-----------------Data Structures and Algorithm------------------------
1. string
2. print to the screen
3. for loops
4.
5.
6.
7.
8.
9.
10.

------------------------------------------------------------------------
  create the top and bottom line
1. create a string that starts "+"
2. calculate the length of the string to match the number of horizontal
dashes.
3. create a constant variable that holds 3 pipe chars seperated by new lines.
4. print the top line append the closing "+"
5. print the pipes constant
6. print the sting
7. print the pipe const
8. print the bottome line
9.
10.
*/
//-----------------------------------Code-------------------------------
let sentence = 'To boldly go where no one has gone before.';

function logInBox(str) {
  let line = "+";
  let side = "|";
  let spaces = "";

  for (let i = 0; i < str.length + 2; i++) {
    line += "-";
    spaces += " ";
  }

  line += "+";

  console.log(line);
  console.log(side + spaces + side);
  console.log(side, sentence, side);
  console.log(side + spaces + side);
  console.log(line);
}

logInBox(sentence);
