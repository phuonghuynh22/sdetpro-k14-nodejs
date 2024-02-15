function sortIntegerArray(value, index, array){
    let unsortedPosition = array.length-1;
    let maxNum = array[0];
    
    while(unsortedPosition > 0){
        for (let currentIndex = 0; currentIndex < array.length; currentIndex++){
            if(array[currentIndex]  > array[currentIndex+1]){
                maxNum = array[currentIndex];
                array[currentIndex] = array[currentIndex+1];
                array[currentIndex+1] = maxNum;
            }
        }
        unsortedPosition--;
    }
}

module.exports = {
    sortIntegerArray: sortIntegerArray,
}