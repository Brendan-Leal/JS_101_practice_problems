function buyFruit(groceryList) {
    let result = [];
    groceryList.forEach(item => {
        result = result.concat(pushN(item));
    });
    return result;
}

function pushN(arr) {
    let n = arr[1];
    let newArr = [];
    
    while (n > 0) {
        newArr.push(arr[0]);
        n -= 1;
    }
    return newArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]