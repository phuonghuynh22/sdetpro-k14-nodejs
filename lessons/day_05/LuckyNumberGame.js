const readline = require('readline-sync');
/**
 *  ---- GAME MENU ---
 * 1. Generate a random number (1-> 10)
 * 0. Exit!
 */
let isPlaying = true;

while (isPlaying) {
    printGameMenu();
    let userOption = getUserOption();

    if (userOption === '0') { // HOAC if(userOption == 0)
        isPlaying = false;
    } else if (userOption == 1) {
        // Generate a random number
        let randomNumber = Math.floor(Math.random() * 10) + 1; // random() sinh ra number < 1
        // print out
        console.log("The lucky number is: ", randomNumber);
    } else {
        console.log("Nhap sai so rui!");
    }

}

console.log('Hen gap lai!');

function printGameMenu() {
    console.log('---- GAME MENU ---');
    console.log('1. Generate a random number (1-> 10)');
    console.log('0. Exit!')
}

function getUserOption() {
    return userInput = readline.question("Please select an option: ")

}