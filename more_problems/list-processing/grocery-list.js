/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
-given an array where each element is an array that holds the name of a fruit
and a number generate a new array where the elements are the fruit name repeated
the corosponding times.

EXPECTED INPUT:

EXPECTED OUTPUT:

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
1. Given a list of sub-lists iterate through each sub-list
2. Create a loop that will repeat x number of times based on the second element
in the sub-list.
3. put the first item in the sub-list x number of times
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
function buyFruit(array) {
  let collectionOfFruit = [];

  array.forEach((subArray) => {
    for (let i = 0; i < subArray[1]; i++) {
      collectionOfFruit.push(subArray[0]);
    }
  });
  console.log(collectionOfFruit);
  return collectionOfFruit;
}

// TEST CASES:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
