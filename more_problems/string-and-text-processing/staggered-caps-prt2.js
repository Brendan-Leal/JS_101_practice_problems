function staggeredCase(str) {
  let isPreviousLetterCap = true;

  let test = str.split("")
    .map(letter => {
      letter = letter.toLowerCase();

      if (letter >= "a" && letter <= "z") {

        if (isPreviousLetterCap) {
          isPreviousLetterCap = false;
          return letter.toUpperCase();

        } else {
          isPreviousLetterCap = true;
          return letter.toLowerCase();
        }
      } else {
        return letter;
      }
    });
  console.log(test.join(""));
  return test.join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
