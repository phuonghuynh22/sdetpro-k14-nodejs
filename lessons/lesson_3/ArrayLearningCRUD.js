//const myNumerArray = [];
//myNumerArray = 'sthElse'; // -> const but re-assign causing error

/**
 * CRUD
 */

// Literal declaration -> should use
let myNumArray = [1, 2, 3, 4, 5]; // create


/**
 * length: number of elements
 * index: 0 -> (length - 1)
 */
console.log('Array length: ', myNumArray.length);
console.log('Value of the second num before updating: ', myNumArray[1]); // read
myNumArray[1] = 100;
console.log('Value of the second num after updating: ', myNumArray[1]); // read

console.log(myNumArray[100]); // error undefined in JS
// Possibly undefined holes
myNumArray[10] = 1000;
// 1, 2, 3, 4, 5             10
console.log(myNumArray); //[ 1, 100, 3, 4, 5, <5 empty items>, 1000 ]

myNumArray.push(6); // day gia tri vo sau cung

// removing the last number
let removedValue = myNumArray.pop();
console.log(removedValue);
console.log('After removing last element: ', myNumArray);

// removing the first number
myNumArray.shift()
console.log('After removing first element: ', myNumArray);

// deleting | splice
myNumArray.splice(0, 2); //xoa tu index 0
console.log('After deleting array: ', myNumArray);

// deleting | splice
myNumArray.splice(0); //xoa tu index 0
console.log('After deleting array: ', myNumArray);


// Via Array constructor -> should not use
// let viaConstructor = new Array(1,2,3,4);


let myNewArray = [1, 3, 4, 5];
let whereToInsert = 1;
let numberOfArgumentToBeRemoved = 0;
let valueToBeAdded = 2;
myNewArray.splice(whereToInsert, numberOfArgumentToBeRemoved, valueToBeAdded);
console.log(myNewArray);
