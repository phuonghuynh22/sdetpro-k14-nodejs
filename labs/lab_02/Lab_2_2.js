let yourNumber = -76576564567;
let result = yourNumber % 2;

console.log('Your number is ' + yourNumber);

if(result === 0 || (yourNumber === 0 )){
    console.log('This is an even number!');
} else if (result === 1 ||  result === (-1)) {
    console.log('This is an odd number!');
} else {
    console.log('Please input an integer number!');
}
