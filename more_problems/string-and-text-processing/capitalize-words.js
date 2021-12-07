function wordCap(str) {
  let titleCase = [];

  str.split(" ").forEach((word) => {
    let capitalLetter = word.split("").slice(0,1)[0].toUpperCase();
    titleCase.push(capitalLetter + word.toLowerCase().split("").splice(1).join(""));
  });

  return titleCase;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
