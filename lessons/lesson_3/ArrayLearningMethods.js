const {
    filterEvenNumber, 
    convertToEvenNumbers, 
    sortNumberASC, 
    sortNumberDESC} = require('../../utils/ArrayHelper');
/**
 * Methods to process array
 */

// Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

// 1. Most of methods to process an array can accept a function as a parameter

// FILTER
myNumArray = myNumArray.filter(filterEvenNumber);

for (const value of myNumArray) {
    console.log(value);
}

/* refErr
const filterEvenNumber = function(){

}
*/

// 2. The function to process the array: (value, index, array)

/*
// MAP sth --> [SAME rule/logic] --> sthElse
const evenNumArray = myNumArray.map(convertToEvenNumbers);

// SORT strings: Asc, Desc
let myStrings = ['B', 'A', 'C'];
myStrings.sort();
myStrings.reverse();


// SORT number
let complexNumArray = [100, 22, 19];
complexNumArray.sort(); // returns invalid sorting [ 100, 19, 22 ]

complexNumArray.sort(sortNumberASC);
complexNumArray.sort(sortNumberDESC);
complexNumArray.sort((a,b) => (a-b)); // 8:7 am


// forEach
let targetStr = ''; // 8:16

function convertToNoSpaceStr (value, index, array){
    console.log(index);
    targetStr = targetStr + value;
}
myNumArray.forEach(convertToNoSpaceStr);

// PRINT RESULTS
for (const value of myNumArray) {
    console.log(evenNumArray);
}

console.log(myStrings);
console.log(complexNumArray);
console.log(targetStr);
*/