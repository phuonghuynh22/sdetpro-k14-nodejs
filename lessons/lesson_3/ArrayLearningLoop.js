//const myNumerArray = [];
//myNumerArray = 'sthElse'; // -> const but re-assign causing error

/**
 * CRUD
 */

// Literal declaration -> should use
let myNumArray = [1, 2, 3, 4, 5]; // create

// let i = 0
for (let i = 0; i < 5; i++) {
    console.log(0);
}

// console.log(i);


let arrayLength = myNumArray.length;
console.log('arrayLength: ', arrayLength);
for (let index = 0; index < array.length; index++) {
    const currentValue = myNumArray[index];
    myNumArray[index] = currentValue*2;
}

// print out without index
for (const value of object) {
    console.log(value);
}