function doubleConsonants(str) {
  const VOWLES = "AEIOUaeiou";
  const CONSONANTS = "BCDFGHJKLMNPQRSTVWQXYZbcdfghjklmnpqrstvwxyz";

  let doubleNonVowles = str.split("").map(char => {
    if (VOWLES.includes(char)) {
      return char;
    } else if (!CONSONANTS.includes(char)) {
      return char;
    } else {
      return char + char;
    }
  });

  return doubleNonVowles.join("");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
