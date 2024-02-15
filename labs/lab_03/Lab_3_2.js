// Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 0, 4, 5];
console.log('Input array: ', intArr);

intArr.filter(sortIntegerArray);
console.log('Minimum', intArr[0]);
console.log('Maximum', intArr[intArr.length-1]);

function sortIntegerArray(value, index, array){
    let unsortedPosition = intArr.length - 1;
    let maxNum = intArr[0];
    
    while(unsortedPosition > 0){
        for (let currentIndex = 0; currentIndex < intArr.length; currentIndex++){
            if(intArr[currentIndex]  > intArr[currentIndex+1]){
                maxNum = intArr[currentIndex];
                intArr[currentIndex] = intArr[currentIndex+1];
                intArr[currentIndex+1] = maxNum;
            }
        }
        unsortedPosition--;
    }
}