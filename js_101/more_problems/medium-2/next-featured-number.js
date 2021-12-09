function featured(number) {
  let MAX_FEATURED_NUMBER = 9876543201;

  do {
    if (number >= MAX_FEATURED_NUMBER) {
      console.log("There is no possible number that fulfills those requirements.");
      break;
    } else {
      number += 1;
    }
  } while (conditionsNotMet(number));
  console.log(number);
  return number;
}
function conditionsNotMet(number) {
  if (isOdd(number) &&
      isMultipleOfSeven(number) &&
      !isRepeatingDigitPresent(number)
  ) {
    return false;
  } else {
    return true;
  }
}

function isOdd(number) {
  return number % 2 !== 0;
}
function isMultipleOfSeven(number) {
  return number % 7 === 0;
}

function isRepeatingDigitPresent(number) {
  return (/([0-9]).*?\1/).test(number);
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
//9007199254740991
