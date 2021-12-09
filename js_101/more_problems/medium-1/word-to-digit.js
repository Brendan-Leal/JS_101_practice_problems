const numbersToDigits = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";


function wordToDigit(str) {
  let numberWordsArray = Object.keys(numbersToDigits);
  let wordInString = str.split(" ");

  wordInString.forEach((word) => {
    word = extractWords(word);
    if (numberWordsArray.includes(word)) {
      str = str.replace(word, numbersToDigits[word]);
    }
  });
  console.log(str);
  return str;
}

function extractWords(word) {
  return word.split("")
    .filter(char => alphabet.includes(char.toLowerCase()))
    .join("");
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
