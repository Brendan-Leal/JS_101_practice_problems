/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given an array create a new array that is exactly the same as the original
except the first element in the new array is now the last element. Keep the
original array unchanged.

EXPECTED INPUT: Array

EXPECTED OUTPUT: Array

RULES:
  EXPLICIT
    - If input is not an array return undefined
    - If input is an empty array return an empty array.
    - Input array is not mutated.
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

EXAMPLE 1: [7, 3, 5, 2, 9, 1]
OUTPUT: [3, 5, 2, 9, 1, 7]


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
Check to see if what's passed into the function is NOT array OR if the array
is empty.
  If not an array return return undefined.
  If it is an array but is empty return an empty array.

If the argument passed into the function is an array
  Make a copy of the list
  remove the first item in the list store it
  append the first item in the list to the end of the list
  return the list.
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
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray() === undefined); // undefined
console.log(rotateArray(1) === undefined);// undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                   // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
