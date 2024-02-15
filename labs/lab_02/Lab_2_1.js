let weight = 25; // Normal: 55.5 - 74.7; Over: 75 - 89.7; Obesity: 90
let height = 1.5;
let BMI = weight / (height * 2);
console.log('Your BMI number is ' + BMI);

/*
Underweight = <18.5
Normal weight = 18.5 – 24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/

if (BMI < 18.5) {
    if (BMI > 0) {
        console.log('You are Underweight!');
    } else {
        console.log('Please input the correct weight and height!');
    }
} else if (BMI < 25) {
    console.log('You are Normal!');
} else if (BMI < 30) {
    console.log('You are Overweight!');
} else {
    console.log('You are Obesity!');
}

