let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  let tempMatrix = matrix.slice();
  let rotatedMatrix = [];
  let rowsInMatrix = tempMatrix.length - 1;
  let columnsInMatrix = tempMatrix[0].length - 1;

  for (let columnIndex = columnsInMatrix; columnIndex >= 0; columnIndex--) {
    let newRow = [];

    for (let rowIndex = 0; rowIndex <= rowsInMatrix; rowIndex++) {
      newRow.push(tempMatrix[rowIndex][columnIndex]);
    }
    rotatedMatrix.push(newRow);
  }
  rotatedMatrix.reverse();
  rotatedMatrix.forEach((array) => {
    array.reverse();
  });

  return rotatedMatrix;
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
