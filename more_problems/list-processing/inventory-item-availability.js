/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given an array of objects calculate the total quantity of each item, based on
whether or not the item is moving in or out of inventory.

EXPECTED INPUT: array of objects

EXPECTED OUTPUT: boolean

RULES:
  EXPLICIT
    - If an item's movment is out then subtract the quantity of items in
    inventory
    - If the items movment is in then add the quantity of items to inventory
    - Use the transactionsFor() function
  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
-
-
-

MENTAL MODEL:
- items move in add them to inventory. Items move out; removed from inventory
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. For a given item id and the total number of items in inventory
2. Grab all the items of a specific item id.
3. If the items movement is out then subtract the quantity from the current
total
4. If the items movment is in the add the quantity to the current total
5. If the total is greater than 0 then item is in stock
  otherwise the item is out of stock.
6.
7.
8.
9.
10.

--------------------------------------------------------------------------------
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(itemNumber, transaction) {
  let collectionOfItems = transactionsFor(itemNumber, transaction);
  let total = 0;

  collectionOfItems.forEach((item) => {
    if (item.movement === "in") {
      total += item.quantity;
    } else {
      total -= item.quantity;
    }
  });

  console.log(total > 0);
  return total > 0;
}


function transactionsFor(inventoryItem, transaction) {
  let result = transaction.filter(object => {
    return object.id === inventoryItem;
  });
  return result;
}

// TEST CASES:
isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
