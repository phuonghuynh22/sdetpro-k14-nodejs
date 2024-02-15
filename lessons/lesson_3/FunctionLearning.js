/**
 * DRY: Dont Repeat Yourself - To group same logic bloc into same place -> reusable
 * Group same logic category into same place
 * -> Maintainable -> extendable -> reliable
 */

console.log(myVariable);
// Function declaration
function functionName(){
    // Logic to process parameters if any
    //var myVariable = 1; // hoisting within its scope

    let result = 1;
    return 1;
}

// rau, ca: parameters | alias
// Argument(s): gia tri thuc su cua parameters cung cap tai thoi diem runtime
function nauCanhChua(rau, ca){
    // Process rau and ca

}
// {scope/ code block/ code body}
// Function expression


function functionName2(){
}

console.log(1);
functionName2();

functionName(); //call without get value

// to get value
// hoisted
let myReturnedValue = functionName3();
console.log(myReturnedValue);
function functionName3(){
    return 3;
}



console.log(addNumber(1,2)); //RefError
// function expression | It's NOT hoisted like Function declaration
const addNumber = function(firstNum, secondNum){
    return firstNum + secondNum;
}