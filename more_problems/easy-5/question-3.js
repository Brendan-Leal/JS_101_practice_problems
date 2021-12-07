function halvsies(array) {
  let finalResult = [];

  if (arrayIsEvenLength(array) && array.length !== 0) {
    finalResult = getEvenHalvesOfArray(array);
  } else if (!arrayIsEvenLength(array)) {
    finalResult = getUnevenHalvesOfArray(array);
  } else {
    finalResult = [[]];
  }

  console.log(finalResult);
}
function getUnevenHalvesOfArray(array) {
  let middleIndex = ((array.length + 1) / 2) - 1;
  let firstHalfOfArray = [];
  let secondHalfOfArray = [];
  let unevenArray = [];

  for (let i = 0; i <= middleIndex; i++) {
    firstHalfOfArray.push(array[i]);
  }
  unevenArray.push(firstHalfOfArray);

  for (let i = middleIndex + 1; i < array.length; i++) {
    secondHalfOfArray.push(array[i]);
  }
  unevenArray.push(secondHalfOfArray);
  return unevenArray;
}

function arrayIsEvenLength(array) {
  // Not treating 0 as even. Will handle that case seperatly
  return array.length % 2 === 0;
}

function getEvenHalvesOfArray(array) {
  let halfWayIndex = (array.length / 2) - 1;
  let firstHalfOfArray = [];
  let secondHalfOfArray = [];
  let evenArray = [];

  for (let i = 0; i <= halfWayIndex; i++) {
    firstHalfOfArray.push(array[i]);
  }
  evenArray.push(firstHalfOfArray);

  for (let i = halfWayIndex + 1; i < array.length; i++) {
    secondHalfOfArray.push(array[i]);
  }
  evenArray.push(secondHalfOfArray);
  return evenArray;
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
