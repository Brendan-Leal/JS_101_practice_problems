function sumOfSums(arr) {
    let total = 0;
    let arrCopy = arr.slice();

    for (let i = 0; i < arr.length; i++) {
        total += arrCopy.reduce((acc, curr) => acc + curr);
        arrCopy.pop();        
    }
    return total;

}


console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// reduce the array by summing all the values save a runnig total
// remove the last elemet and repeat