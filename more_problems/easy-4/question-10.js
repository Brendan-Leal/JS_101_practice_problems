function swap(str) {
  let wordArray = str.split(" ");
  let finalResult = [];

  for (let i = 0; i < wordArray.length; i++) {
    let charArray = wordArray[i].split("");

    if (charArray.length === 1) {
      finalResult.push(charArray);
      continue;
    }

    let firstChar = charArray[0]; // stays 0
    let lastChar = charArray[charArray.length - 1];
    let middle = "";

    for (let i = 1; i < charArray.length - 1; i++) {
      middle += charArray[i];
    }
    finalResult.push(lastChar + middle + firstChar);
  }
  console.log(finalResult.join(" "));
  return finalResult.join(" ");
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
