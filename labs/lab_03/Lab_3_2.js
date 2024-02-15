// Finding maximum value/minimum value from an integer array

let intArr = [2.7, 0, -3];
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

function sortIntegerArray() {
    let unsortedPosition = intArr.length - 1;
    let maxNum = intArr[0];

    while (unsortedPosition > 0) {
        for (let currentIndex = 0; currentIndex < intArr.length; currentIndex++) {
            if (intArr[currentIndex] > intArr[currentIndex + 1]) {
                maxNum = intArr[currentIndex];
                intArr[currentIndex] = intArr[currentIndex + 1];
                intArr[currentIndex + 1] = maxNum;
            }
        }
        unsortedPosition--;
    }
}