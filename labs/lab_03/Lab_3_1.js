// Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];
let numberOfEven = 0;
let numberOfOdd = 0;

for (let i = 0; i < intArr.length; i++){
    if (intArr[i] % 2 === 0){
        numberOfEven++;
    } else {
        numberOfOdd++;
    }
}

console.log('Even numbers:', numberOfEven);
console.log('Odd numbers:', numberOfOdd);