function sum(number) {
    let arrOfDigits = String(number).split("");
    return arrOfDigits.reduce((acc, curr) => Number(acc) + Number(curr));
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45