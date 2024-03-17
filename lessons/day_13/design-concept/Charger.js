//const RobotCat = require("./RobotCat");

class Charger {

    static charge(robotCatList){
        robotCatList.forEach(robotCat => {
            console.log(robotCat.charge());
        });
    }
}

module.exports = Charger;