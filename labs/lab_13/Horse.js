const Animal = require("./Animal");

const maxSpeed = 75;

class Horse extends Animal{
    getSpeed(){
        return super.getSpeed(maxSpeed);
    }
}

module.exports = Horse;