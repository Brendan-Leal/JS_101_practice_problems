function countOccurrences(arrayOfVehicles) {
  let savedOccurences = {};

  arrayOfVehicles.forEach((item, index) => {
    if (duplicateFoundInArray(arrayOfVehicles, index)) {
      updateObject(savedOccurences, item);
    } else {
      addNewPropertyAndValue(savedOccurences, item);
    }
  });
  console.log(savedOccurences);
}

function duplicateFoundInArray(array, index) {
  return array.indexOf(array[index]) !== index;
}

function keyNotInObject(obj, item) {
  return !Object.keys(obj).includes(item);
}

function updateObject(obj, item) {
  if (keyNotInObject(obj, item)) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
}

function addNewPropertyAndValue(obj, item) {
  obj[item] = 1;
}


countOccurrences(['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck']);
