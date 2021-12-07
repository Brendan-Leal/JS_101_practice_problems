function mergeSort(array) {
  if (array.length === 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let resultArray = [];
  let leftArrayCopy = leftArray.slice();
  let rightArrayCopy = rightArray.slice();

  while (leftArrayCopy.length > 0 && rightArrayCopy.length > 0) {
    if (leftArrayCopy[0] <= rightArrayCopy[0]) {
      resultArray.push(leftArrayCopy.shift());
    } else {
      resultArray.push(rightArrayCopy.shift());
    }
  }

  if (leftArrayCopy.length === 0) {
    return resultArray.concat(rightArrayCopy);
  } else {
    return resultArray.concat(leftArrayCopy);
  }
}


console.log(mergeSort([9, 5, 7, 1]));          // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));       // [1, 2, 4, 6, 7]
//
// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
//
// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
