const Animal = require("./Animal");

const maxSpeed = 60;

class Dog extends Animal{

    getSpeed(){
        return super.getSpeed(maxSpeed);
    }
}

module.exports = Dog;