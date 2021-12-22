function staggeredCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (i % 2 === 0) {
            newStr += char.toUpperCase();
        } else {
            newStr += char.toLowerCase();
        }        
    }
    return newStr;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"