function substrings(str) {
  let allCharCombos = [];
  let finalResult = []
  let charArray = str.split("");

  for (let i = 0; i < str.length; i++) {
    allCharCombos.push(getCharCombos(charArray.join("")));
    charArray.shift();
  }

  allCharCombos.forEach((array) => {
    array.forEach((str) => {
      finalResult.push(str);
    });
  });
  console.log(finalResult);
}

function getCharCombos(str) {
  let currentSubstring = "";

  return str.split("").map(char => {
    currentSubstring += char;
    console.log(currentSubstring);
    return currentSubstring;
  });
}

substrings('abcde');
