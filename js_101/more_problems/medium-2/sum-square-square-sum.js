function sumSquareDifference(number) {
  let countArray = setCount(number);

  console.log(sumSquare(countArray) - squareSum(countArray));
  return sumSquare(countArray) - squareSum(countArray);
}

function squareNumber(numb) {
  return Math.pow(numb, 2);
}

function squareSum(countArray) {
  return countArray
    .map(numb => squareNumber(numb))
    .reduce((curr, next) => curr + next);
}

function sumSquare(countArray) {
  let sum = countArray.reduce((curr, next) => curr + next);
  return squareNumber(sum);
}

function setCount(number) {
  let count = [];
  for (let i = 1; i <= number; i++) {
    count.push(i);
  }
  return count;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
