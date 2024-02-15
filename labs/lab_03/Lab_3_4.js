// Merge 2 SORTED integer array into one SORTED array

const {
    sortIntegerArray    
} = require ('../lab_03/ArrayHelper');

let arrayA = [1, 12, 16, 28, 34, 72]
let arrayB = [1, 13, 16, 27, 99]
let arrayC = [];

for (const valueA of arrayA) {
    arrayC.push(valueA);
}
for (const valueB of arrayB) {
    arrayC.push(valueB);
}

console.log(arrayC);

arrayC.filter(sortIntegerArray);
console.log('Sorted array:', arrayC);