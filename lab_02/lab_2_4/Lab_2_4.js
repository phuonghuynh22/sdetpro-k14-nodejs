const CalculateWeight = require('./CalculateWeight');

const NORMAL_BMI = CalculateWeight.NORMAL_BMI;
const OVER_BMI = CalculateWeight.OVER_BMI;
const OBESITY_BMI = CalculateWeight.OBESITY_BMI;

let userBMI = CalculateWeight.calculateYourBMI();
let min = CalculateWeight.calculateMinWeight();
let max = CalculateWeight.calculateMaxWeight();

console.log('Your BMI is', userBMI);

if (userBMI < NORMAL_BMI) {
    if (userBMI > 0) {
        console.log('You are Underweight!');
        console.log('You should increase ' + (min*(-1)) + ' more kilos to reach Normal BMI but less than ' + max + ' kilos!');
    } else {
        console.log('Please input the correct weight and height!');
    }
} else if (userBMI < OVER_BMI) {
    console.log('You are Normal!');
    console.log('You can decrease only ' + min + ' kilos to keep in Normal BMI and increase more but less than ' + max + ' kilos!');
} else if (userBMI < OBESITY_BMI) {
    console.log('You are Overweight!');    
    console.log('You should decrease from ' + (max*(-1) + 0.5) + ' kilos to reach Normal BMI but less than ' + min + ' kilos!');
} else {
    console.log('You are Obesity!');
    console.log('You should decrease from ' + (max*(-1) + 0.5) + ' kilos to reach Normal BMI but less than ' + min+ ' kilos!');
}