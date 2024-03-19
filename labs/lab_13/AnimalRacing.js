const Dog = require("./Dog");
const Horse = require("./Horse");
const RacingFunctions = require("./RacingFunctions");
const Tiger = require("./Tiger");

animalRacing();

function animalRacing(){
    const horse = new Horse('Horse');
    const tiger = new Tiger('Tiger');
    const dog = new Dog('Dog');
    const racingFunctions = new RacingFunctions;

    const horseSpeed = horse.getSpeed();
    horse.getInfo(horseSpeed);

    const tigerSpeed = tiger.getSpeed();
    tiger.getInfo(tigerSpeed);

    const dogSpeed = dog.getSpeed();
    dog.getInfo(dogSpeed);

    let animalList = [horse, tiger, dog];
    let result = racingFunctions.compareSpeed(animalList);
    console.log(result);
}