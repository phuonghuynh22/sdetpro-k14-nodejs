const readline = require('readline-sync');


/**
 * 1. do sth before checking the condition for the FIRST iteration
 * 
 */

let guessingTime = 0;
let randomNum = getRandomNumber();
console.log('randomNum', randomNum);

do {
    let userNum = getUserNum();

    // Do the guessing game
    if (userNum === randomNum){
        console.log('Yeah!');
        break;
    }

    guessingTime++;

} while(guessingTime < 3);

if (guessingTime === 3){
    console.log('Chuc ban may man lan sau!');
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNum(){
    return userInput = readline.question("Please enter your number: ")
}