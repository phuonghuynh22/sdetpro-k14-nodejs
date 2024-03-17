const Person = require('./Person');

const teo = new Person();
console.log(teo._age); // ko nen dung`

//console.log(teo.age()); // TypeError: not a function
console.log(teo.age); // goi tu getter


console.log(teo.name);
teo.name = 'Teo dep trai';
console.log(teo.name);


/**
 *  ==== UI ====
 * Employee Number:....
 * Calculate -> Total:
 * 
 * 
 * Data Model: Class (methods) - 00 (1)
 * Process Data Model (functions) - Functional Programing (2)
 * Requester to process datamodel: Construct data, call (2) to process data
 * MVC - Model View Controller
 * 
 */