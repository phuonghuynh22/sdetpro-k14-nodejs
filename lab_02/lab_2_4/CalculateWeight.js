let currentWeight = 90; // Normal: 55.5 - 74.7; Over: 75 - 89.7; Obesity: 90
let height = 1.5;

/*
Underweight = <18.5
Normal weight = 18.5 – 24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/

const NORMAL_BMI = 18.5;
const OVER_BMI = 25;
const OBESITY_BMI = 30;

function calculateYourBMI() {
    return currentWeight / (height * 2);
}

function calculateMinWeight() {
    minWeight = (calculateYourBMI() - NORMAL_BMI) * height * 2;
    return Math.round(minWeight / 0.5) * 0.5;
}

function calculateMaxWeight() {
    maxWeight = (OVER_BMI - calculateYourBMI()) * height * 2;
    return Math.round(maxWeight / 0.5) * 0.5;
}

module.exports = {
    NORMAL_BMI: NORMAL_BMI,
    OVER_BMI: OVER_BMI,
    OBESITY_BMI: OBESITY_BMI,
    calculateYourBMI: calculateYourBMI,
    calculateMinWeight: calculateMinWeight,
    calculateMaxWeight: calculateMaxWeight,
}