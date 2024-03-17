import RobotCat from "./RobotCat";

export default class SolarRobotCat extends RobotCat{

    constructor(){
        super('Solar Robot Cat');
        this.id = this.somethingRandom();
    }

    charge(): string {
        return super.charge() + "with solar circuit...";
    }

    private somethingRandom(): number (){
        
    }
    // method signature: name + parameters (type and number of parameters)
}