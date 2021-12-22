function swapCase(str) {
    let newStr = str.split("").map(char => {
        if (char.match(/[a-z]/)) {
            return char.toUpperCase();
        } else if (char.match(/[A-Z]/)) {
            return char.toLowerCase();
        } else {
            return char;
        }
    })
    return newStr.join("")

   
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"