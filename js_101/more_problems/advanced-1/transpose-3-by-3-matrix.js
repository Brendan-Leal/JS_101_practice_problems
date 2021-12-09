const MATRIX = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let transposedArray = [];

  for (let column = 0; column < matrix.length; column++) {
    let newRow = [];

    for (let row = 0; row < matrix[column].length; row++) {
      newRow.push(matrix[row][column]);
    }
    transposedArray.push(newRow);
  }
  return transposedArray;
}

let newMatrix = transpose(MATRIX);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(MATRIX);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*
0,0
1,0
2,0

0,1
1,1
2,1

0,2
1,2
2,2
*/
