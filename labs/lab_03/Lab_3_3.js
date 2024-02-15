// Sort an integer array from min to max

const {
    sortIntegerArray    
} = require ('../lab_03/ArrayHelper');

let intArray = [12, 34, 1, 16, 28];
console.log('Input array: ', intArray);

intArray.filter(sortIntegerArray);
console.log('Sorted array:', intArray);