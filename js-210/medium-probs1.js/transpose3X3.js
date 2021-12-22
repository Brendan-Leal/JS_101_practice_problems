/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.



INPUT: a 2d array 3x3 matrix
OUTPUT: a 2d array 

Explicit Rules:
To transpose a matrix each row becomes a column

Implicit Rules:
If you read the first row left to right in the original matrix that should be the same as reading the first value of every row in the transposd matrix

Questions:

-----------------------------Examples------------------------------
789
456
123

741
852
963



------------------Data Structures and Algorithm--------------------
Create a new array to hold the transposed values

iterate over each subarray in original once
- take the value at index 0 of the 0th row of original array
- place it in the 0 index of the 0th row in the new array
- take the value at index 1 of the 0th row in original array
-place it at the index 0 of the 1st row in the new array 
- take the value at index 2 of ogAr 0th row
- place it at the 0th index in new array 2nd row.


ogArray 0
subArrayIndex 012

newArray index 000

ogArray 1
subarray 012
newArray 111


*/
//---------------------------Code with Intent----------------------

function transpose(matrix) {
    let transposedArray = [[], [], []];

    matrix.forEach((originalRow, subArrIndex) => {
        originalRow.forEach((value, rowIndex) => {
            transposedArray[rowIndex][subArrIndex] = value;
        });
    });
    console.log(transposedArray);
}
//Test Cases:
const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
];

// const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

let matrix2 = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
];
console.log(transpose(matrix2));
console.log(matrix2);