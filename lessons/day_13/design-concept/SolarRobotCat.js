const RobotCat = require('./RobotCat');

class SolarRobotCat extends RobotCat{
    charge(){
        return super.charge() + 'with solar circuit';
    }
}

module.exports = SolarRobotCat;

// MVC - Model (OO) - View (Usage) - Controller (Functional programing)