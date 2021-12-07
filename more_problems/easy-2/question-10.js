function stringToSignedInteger(str) {
  let sign = "";
  let finalResult = 0;

  if (str.includes("-") || str.includes("+")) {
    sign = str.slice(0,1);
  }

  switch (sign) {
    case "-":
      finalResult = -1 * stringToInteger(str.substring(1, str.length));
      return finalResult;
    case "":
      finalResult = stringToInteger(str);
      return finalResult;
    default:
      finalResult = stringToInteger(str.substring(1, str.length));
      return finalResult;
  }
}

function stringToInteger(str) {
  const DIGITS = { 0 : 0, 1 : 1, 2 : 2, 3 : 3,
    4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9
  };

  let arrayOfStringsDigits = str.split("");
  let number = 0;

  for (let i = 0; i < arrayOfStringsDigits.length; i++) {
    if (DIGITS.hasOwnProperty(arrayOfStringsDigits[i])) {
      number = (number * 10) + DIGITS[arrayOfStringsDigits[i]];
    }
  }
  return number;
}

// TEST CASES:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
