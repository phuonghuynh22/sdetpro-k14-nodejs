const EXPECTED_TIME = 7;
let arrivalTime = 7;

let isHeOnTime = arrivalTime === EXPECTED_TIME;
let msgContent = '';

// nested if else
/*
if(isHeOnTime){
    msgContent = "Let's talk";
    if(sthElse)
} else {
    msgContent = "Write a letter!";
}
*/

// Ternary Operator (Toan tu 3 ngoi)
msgContent = isHeOnTime ? "Let's talk" : "Write a letter!";

msgContent = isHeOnTime ? (2<3 ? "Let's talk":"Do something" ) : "Write a letter!"; // avoid using this => use nested If Else above


console.log(msgContent);