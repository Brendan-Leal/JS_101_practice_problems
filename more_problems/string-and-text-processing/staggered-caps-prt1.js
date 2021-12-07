function staggeredCase(str) {

  return str.split("")
    .map((letter, index) => {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    })
    .join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");                    // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"
