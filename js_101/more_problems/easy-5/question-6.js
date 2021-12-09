function multiplicativeAverage(array) {
  let product = productOfArrayElements(array);
  let quotient = computeQuotient(product, array);

  return quotient.toFixed(3);
}

function productOfArrayElements(array) {
  return array.reduce((accumulator, currentElement) => {
    return accumulator * currentElement;
  });
}
function computeQuotient(product, array) {
  return product / array.length;
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
