function centerOf(str) {
  if (lengthOfStringIsEven(str)) {
    return centerOfEvenLenghtString(str);
  } else {
    return centerCharOf(str);
  }
}

function lengthOfStringIsEven(str) {
  return str.length % 2 === 0;
}
function centerCharOf(str) {
  let centerIndex = Math.floor(str.length / 2);
  return str[centerIndex];
}

function findCenterTwoIndecies(str) {
  let centerTwo = [];

  centerTwo.push(Math.floor(str.length / 2) - 1);
  centerTwo.push(centerTwo[0] + 1);

  return centerTwo;
}

function centerOfEvenLenghtString(str) {
  let centerIndecies = findCenterTwoIndecies(str);

  return str[centerIndecies[0]] + str[centerIndecies[1]];
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
centerOf("abc");
