function union(array1, array2) {
  let combinedArray = [];

  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }

  combinedArray = array1.filter((a, b) => {
    return array1.indexOf(a) === b;
  });
  console.log(combinedArray);
  return combinedArray;
}
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union([8,8,1,8], [5,8,3,1])
