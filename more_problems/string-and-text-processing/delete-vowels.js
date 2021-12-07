const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(array) {
  let noVowelWords = [];

  array.forEach((word) => {
    let charArray = word.split("").filter(char => {
      return !VOWELS.includes(char.toLowerCase());
    });

    noVowelWords.push(charArray.join(""));
  });
  console.log(noVowelWords);
  return noVowelWords;
}

// function removeVowels(array) {
//   let outputArray = [];
//
//   for (let word of array) {
//     let newWord = '';
//     let arrayOfLetters = word.split('');
//
//     for (let letter of arrayOfLetters) {
//       if (!VOWELS.includes(letter.toLowerCase())) {
//         newWord += letter;
//       }
//     }
//     outputArray.push(newWord);
//   }
//   console.log(outputArray);
// }


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
