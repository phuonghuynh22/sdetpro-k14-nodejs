

function divide(firstNumber, secondNumber){
    /*
    let result = firstNumber / secondNumber;
    let upRoundedValue = Math.round(result);
    return upRoundedValue;
    */
    // round 3.33333 -> 3
    // 3.5 -> 4

    console.log('firstNumber', firstNumber);
    console.log('secondNumber', secondNumber);

    // shorten way:
    return Math.round(firstNumber / secondNumber);

    //return Math.ceil(firstNumber / secondNumber); // round up

    //return Math.floor(firstNumber / secondNumber); // round down

}

let result = divide(10, 3);
// let result = divide(10); // works ok without error -> secondNumber value is undefined; 10/undefined equals NaN (Not A Number)
console.log('Value: ', result);
console.log(typeof result);


/**
 * SOLID 
 * S: Single Responsibility: tinh don nhiem - ham chi lam 1 viec duy nhat
 * ten ham co y nghia gan nhat
 * O: Opened - Closed
 * L: Livkos...
 * I: Independent
 * D: 
 */



module.exports = {
    // ten ben ngoai goi: ten ben trong file nay
    teo: divide,
    isEvenNumber: isEvenNumber
}

function isEvenNumber(number){
    return number % 2 === 0;
}

