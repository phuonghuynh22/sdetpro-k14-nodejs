const Animal = require("./Animal");

const maxSpeed = 100;

class Tiger extends Animal{

    getSpeed(){
        return super.getSpeed(maxSpeed);
    }
}

module.exports = Tiger;