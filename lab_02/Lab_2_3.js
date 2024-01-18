let currentWeight = 90; // Normal: 55.5 - 74.7; Over: 75 - 89.7; Obesity: 90
let height = 1.5;
let yourBMI = currentWeight / (height * 2);
//console.log('Your BMI is ' + yourBMI);
console.log('Your weight is ' + currentWeight + ' kg');

/*
Underweight = <18.5
Normal weight = 18.5 – 24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/

let normalWeight = 18.5 * height * 2;
let overWeight = 25 * height * 2;
let idealWeight = 0;
/*
console.log('normalWeight ' + normalWeight);
console.log('overWeight ' + overWeight);
console.log('obesityWeight ' + obesityWeight);
console.log('-------------------');
*/

if (yourBMI < 18.5) {
    if (yourBMI > 0) {
        console.log('You are Underweight!');
        idealWeight = normalWeight - currentWeight;
        console.log('You should increase ' + idealWeight + ' more kilos to reach Normal BMI but less than ' + (overWeight - currentWeight) + ' kilos!');
    } else {
        console.log('Please input the correct weight and height!');
    }
} else if (yourBMI < 25) {
    console.log('You are Normal!');
    idealWeight = currentWeight - normalWeight;
    console.log('You can decrease only ' + idealWeight + ' kilos to keep in Normal BMI and increase more but less than ' + (overWeight - currentWeight) + ' kilos!');
} else if (yourBMI < 30) {
    console.log('You are Overweight!');
    idealWeight = currentWeight - overWeight + 0.5;
    console.log('You should decrease from ' + idealWeight + ' kilos to reach Normal BMI but less than ' + (currentWeight - normalWeight) + ' kilos!');
} else {
    console.log('You are Obesity!');
    idealWeight = currentWeight - overWeight + 0.5;
    console.log('You should decrease from ' + idealWeight + ' kilos to reach Normal BMI but less than ' + (currentWeight - normalWeight) + ' kilos!');
}
