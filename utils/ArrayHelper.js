function filterEvenNumber(value, index, array){
    // Logic
    return value % 2 === 0;
    // return value > 3;
}

function convertToEvenNumbers(value, index, array){
    // console.log(value);
    // console.log(index);

    if (value % 2 !== 0){
        return value + 1;
    } else {
        return value;
    }
}

function sortNumberASC(firstNum, secondNum){
    return firstNum - secondNum;
}

function sortNumberDESC(firstNum, secondNum){
    return secondNum - firstNum;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}