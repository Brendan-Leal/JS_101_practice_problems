/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: You are going to be given an array of ints. your job is to
take that array and find an index N where the sum of the ints to the left of N
is equal to the sum of the ints to the right of N. If there is no index that
would make this happen return -1.

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: ARRAY

EXPECTED OUTPUT: NUMBER (index)

RULES:
  EXPLICIT
    - If there is no index found that would make this happen return -1.
    - The left side of index 0 is considered an empty array
    - Empty arrays sum to 0
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
[1, 2, 3, 4, 3, 2, 1] => 3
b/c index 3 the sum of the left side of the index [1, 2, 3] and the sum of the
right side of the [3, 2, 1] both equal 6

EXAMPLE 2:
[20, 10, -80, 10, 10, 15, 35]
At index 0 the left side of the array is considered empty []
the right side of index 0 is [20, 10, -80, 10, 10, 15, 35]
they both sum to 0 *empty arrays are equal to 0


------------------Data Structures and Algorithm--------------------
Initialize left array
  - Set left array equal to an empty array
Initialize right array
  - Setting the right array equal to the array.
Check if the sum of the left array is equal to the sum of the right array.
  - If the left array is empty the left sum is 0;
  - Otherwise reduce both arrays into their sums and return true if they are
  equal else false.
- If true is returned return 0;

  while (left array length < array length - 1) {
  set the left array
  set the right array
    check if the sum of the left array is equal to the sum of the right array
    if true return the index
  }
  return -1;
*/
//---------------------------Code----------------------------------
function findEvenIndex(array) {
  let leftArray = [];
  let rightArray = array.slice(1);

  if (isEqualSums(sumArray(leftArray), sumArray(rightArray))) return 0;

  let focalIndex = 1;

  while (leftArray.length < array.length - 1) {
    let arrayClone = array.slice();
    leftArray = setLeftArray(arrayClone, focalIndex);
    rightArray = setRightArray(arrayClone, focalIndex);

    if (isEqualSums(sumArray(leftArray), sumArray(rightArray))) {
      return focalIndex;
    }
    focalIndex++;
  }
  return -1;
}

function setLeftArray(array, focalIndex) {
  return array.slice(0, focalIndex);
}

function setRightArray(array, focalIndex) {
  return array.slice(focalIndex + 1);
}

function sumArray(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((current, next) => current + next);
  }
}

function isEqualSums(leftArraySum, rightArraySum) {
  return leftArraySum === rightArraySum;
}


// TEST CASES:
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1])); // 3
