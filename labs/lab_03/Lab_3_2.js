// Finding maximum value/minimum value from an integer array

const {
    sortIntegerArray    
} = require ('../lab_03/ArrayHelper');

let intArr = [2, 0, -3];
console.log('Input array: ', intArr);

if (intArr.length < 1) {
    console.log('The array is empty. Please input numbers to the array!');
} else {
    if (isIntegerArray() === true) {
        if (intArr.length === 1) {
            console.log('There is only one item in the array! Minimum = Maximum = ', intArr[0]);
        } else {
            intArr.filter(sortIntegerArray);
            console.log('Minimum', intArr[0]);
            console.log('Maximum', intArr[intArr.length - 1]);
        }
    } else {
        console.log('Please input only integer numbers to the array!');
    }
}

function isIntegerArray() {
    for (const value of intArr) {
        if (value % 2 === 0 || value % 2 === 1 || value % 2 === (-1) ) {
            return true;
        }
        else {
            return false;
        }
    }
}