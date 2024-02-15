const NumberHandler = require('../utils/NumberHandler');

let result = NumberHandler.teo(10,3);
console.log('Result', result);

console.log('Is 4 even number: ', NumberHandler.isEvenNumber(4));


function doSth(number){
    NumberHandler.isEvenNumber(number);
}

// Importing by Destructuring {NumberHandler}
//const {NumberHandler} = require('../utils/NumberHandler');
const {divide, isEvenNumber} = require('../utils/NumberHandler');

 