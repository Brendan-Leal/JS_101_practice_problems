function staggeredCase(str) {
    let newStr = "";
    let isUpper = true;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i) && isUpper) {
            newStr += char.toUpperCase();
            isUpper = !isUpper;
        } else if(char.match(/[a-z]/i) && isUpper === false) {
            newStr += char.toLowerCase();
            isUpper = !isUpper;
        } else {
            newStr += char;
        }
        
    }
    return newStr;
}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"