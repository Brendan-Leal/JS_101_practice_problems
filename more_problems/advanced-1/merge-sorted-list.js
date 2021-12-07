/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Merge two sorted arrays into one single sorted array.

EXPECTED INPUT: 2 sorted arrays

EXPECTED OUTPUT: 1 array. With element sorted.

RULES:
  EXPLICIT
    - Cannot sort a result array.
    - You must build the result array one element at a time
    -
  IMPLICIT (What's not stated in the problem?)
  - If merging an array with elements with an empty array return the 1 filled
  array
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

EXAMPLE 1: [1, 5, 9], [2, 6, 8]
OUTPUT: [1, 2, 5, 6, 8, 9]


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. If one array is empty and the other is not return the filled array.
2. Compare the 0th element of the first array with the oth element of the second
array.
3. If the value at index 0 of the first array is less than the value  at index
0 of the second array then add the the value at index 0 of the 1st array to the
result array.
  - Else If the value at index 0 of the first array is greater than the value at
  index 0 of the second array add the value at index 0 of the 2nd array to the
  result array.
  - else if the value at index 0 of both arrays are equal add both elements to
  the result array.
  - Repeat steps 2-3 untill one or both arrays are empty.
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

function merge(array1, array2) {

  if (isEmptyArray(array1) || isEmptyArray(array2)) {
    return arrayWithElements(array1, array2);
  } else {
    let arr1Copy = array1.slice();
    let arr2Copy =  array2.slice();
    let resultArray = [];

    do {
      mergeElements(arr1Copy, arr2Copy, resultArray);
    } while (bothArraysNotEmpty(arr1Copy, arr2Copy));

    if (isEmptyArray(arr1Copy)) {
      resultArray = pushRemainingElementsFrom(arr2Copy, resultArray);
    } else if (isEmptyArray(arr2Copy)) {
      resultArray = pushRemainingElementsFrom(arr1Copy, resultArray);
    }

    console.log(resultArray);
    return resultArray;
  }
}

function pushRemainingElementsFrom(arr, resultArray) {
  resultArray = resultArray.concat(arr);
  return resultArray;
}

function bothArraysNotEmpty(arr1, arr2) {
  return arr1.length !== 0 && arr2.length !== 0;
}

function mergeElements(arr1, arr2, resultArray) {
  if (arr1[0] < arr2[0]) {
    resultArray.push(arr1[0]);
    arr1.shift();

  } else if (arr1[0] > arr2[0]) {
    resultArray.push(arr2[0]);
    arr2.shift();

  } else if (arr1[0] === arr2[0]) {
    resultArray.push(arr1[0]);
    resultArray.push(arr2[0]);
    arr1.shift();
    arr2.shift();
  }
}

function isEmptyArray(arr) {
  return arr.length === 0;
}

function arrayWithElements(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else {
    return arr1;
  }
}


// TEST CASES:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));            // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
merge([1,2,3,4,5,6,7], [8, 9]);
