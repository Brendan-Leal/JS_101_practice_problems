function crunch(str) {
  let characters = str.split('');

  let condensedWord = characters.filter((char, index) => {
    if (index === 0 || char !== characters[index - 1]) {
      return true;
    }
    return false;
  });

  console.log(condensedWord.join(""));
  return condensedWord.join("");

}

// TEST CASES:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');
