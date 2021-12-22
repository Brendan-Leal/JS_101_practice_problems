const transactions = [
    { id: 101, movement: 'in', quantity: 5 },
    { id: 105, movement: 'in', quantity: 10 },
    { id: 102, movement: 'out', quantity: 17 },
    { id: 101, movement: 'in', quantity: 12 },
    { id: 103, movement: 'out', quantity: 15 },
    { id: 102, movement: 'out', quantity: 15 },
    { id: 105, movement: 'in', quantity: 25 },
    { id: 101, movement: 'out', quantity: 18 },
    { id: 102, movement: 'in', quantity: 22 },
    { id: 103, movement: 'out', quantity: 15 },
];

function transactionsFor(id, transactions) {
    return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
    let items = transactionsFor(id, transactions);
    let total = items.reduce((acc, curr) => {
        if(curr.movement === "in") {
            acc += curr.quantity;
        } else {
            acc -= curr.quantity;
        }
        return acc;
    }, 0);

    return total > 0;

}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

