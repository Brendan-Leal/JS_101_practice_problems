function wordSizes(str) {
  let wordsArray = str.split(" ");
  let letterCounter = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let wordLength = wordsArray[i].length;
    wordLength = String(wordLength);

    if (wordLength === "0") continue;

    let keys = Object.keys(letterCounter);

    if (keys.includes(wordLength)) {
      letterCounter[wordLength] += 1;
    } else {
      letterCounter[wordLength] = 1;
    }
  }

console.log(letterCounter);
return letterCounter;
}



// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
