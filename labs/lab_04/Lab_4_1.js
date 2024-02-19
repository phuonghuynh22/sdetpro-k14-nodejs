const readline = require('readline-sync');

/**
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
 */

let originalAccount = {
    accountNumber: '000',
    accountName: 'Lisa',
    balance: 1000
}

let clonedAccount = JSON.parse(JSON.stringify(originalAccount));
clonedAccount.accountNumber = '222';
clonedAccount.accountName = 'Jennie'
clonedAccount.balance = 2000;

//let bankAccounts = [originalAccount, clonedAccount];

let isUsing = true;
let userOption;

while (isUsing) {
    showMenu();
    userOption = getUserOption();

    if (userOption === '0') {
        console.log('Closing....!');
        isUsing = false;
    } else if (userOption === '1') {
        findAccount();
    } else if (userOption === '2') {
        updateBalance();
    } else {
        console.log('Please input the correct option!');
    }
}

function showMenu() {
    console.log('\n === Banking application ===');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program!');
}

function getUserOption() {
    return userOption = readline.question('Please select an option: ');
}

function findAccount() {
    let userInput = readline.question('Please input account number: ');

    if (userInput === clonedAccount.accountNumber) {
        console.log('\n Finding...');
        console.log('Account name: ', clonedAccount.accountName);
        console.log('Balance:', clonedAccount.balance);
        console.log('\n');
    } else {
        console.log('Account not found! \n');
        userInput = readline.question('Do you want to find another account? Y/N? ');
        if (userInput === 'N' || userInput === 'n') {
            return userOption = '0';
        } else if (userInput === 'Y' || userInput === 'y') {
            findAccount();
        } else {
            console.log('Wrong answer!\n');
        }
    }
}

function updateBalance() {
    console.log('Account name: ', clonedAccount.accountName);
    console.log('Balance:', clonedAccount.balance);
    console.log('\n');

    userInput = readline.question('How much do you want to withdraw? ');
    if (userInput < 0 || userInput == 0) {
        console.log('Balance should be greater 0!\n');
        updateBalance();
    } else if ((userInput <= clonedAccount.balance)) {
        clonedAccount.balance = clonedAccount.balance - userInput;
        console.log('Current balance: ', clonedAccount.balance);
    } else if (userInput > clonedAccount.balance) {
        console.log('Current balance is not enough!\n');
        updateBalance();
    } else {
        console.log('Please check your input!\n');
        updateBalance();
    }
}