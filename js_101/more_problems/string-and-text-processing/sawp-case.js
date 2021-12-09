function swapCase(str) {
  let test = str.split("").map(letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  });
  console.log(test.join(""));
  return test.join("");
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
