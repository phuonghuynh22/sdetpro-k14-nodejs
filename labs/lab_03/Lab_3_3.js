// Sort an integer array from min to max

let intArr = [12, 34, 1, 16, 28];
console.log('Input array: ', intArr);

intArr.filter(sortIntegerArray);
console.log('Sorted array:', intArr);

function sortIntegerArray(){
    let unsortedPosition = intArr.length-1;
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