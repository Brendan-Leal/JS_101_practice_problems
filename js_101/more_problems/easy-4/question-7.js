function runningTotal(array) {
  let currentTotal = 0;
  let runningTotal = [];

  for (let i = 0; i < array.length; i++) {
    currentTotal += array[i];
    runningTotal.push(currentTotal);
  }
  console.log(runningTotal);
  return runningTotal;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
