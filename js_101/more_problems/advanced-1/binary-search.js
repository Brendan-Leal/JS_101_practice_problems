/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Create a function that searches an array using the binary
search Algorithm


WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: Array

EXPECTED OUTPUT: A single array element.

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
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
- Find the middle index of the the array.
  If the middle value at that index is equal to the search term stop searching
  Otherwise if the middle value is less than the search term disreguard the
  right half including the middle value.
  Otherwise if the middle value is greater than the seach term disreguard the
  left half including the middle value. =
  Repeat the steps above until search term is found
  return the index of the search term found
  or the array is empty return -1.
-
-
-
-
-
-
-
-
-
-
*/
//-----------------------------------Code---------------------------------------
function binarySearch(array, searchTerm) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (array[middleIndex] < searchTerm) {
      leftIndex = middleIndex + 1;
    } else if (array[middleIndex] > searchTerm) {
      rightIndex = middleIndex - 1;
    } else {
      console.log(middleIndex);
      return middleIndex;
    }
  }
  console.log(-1);
  return -1;
}

// TEST CASES:

let yellowPages = [
  'Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper'
];

binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
