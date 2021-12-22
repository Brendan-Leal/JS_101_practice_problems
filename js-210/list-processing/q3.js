function multiplyAllPairs(arr1, arr2) {
    let result = arr1.reduce((acc, curr) => {
        arr2.forEach(num => {
            acc.push(curr * num);
        });
        return acc;
    }, []);
    return result.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([4, 3, 1, 2], [2, 4]));    // [2, 4, 4, 6, 8, 8, 12, 16]