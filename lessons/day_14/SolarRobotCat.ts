import RobotCat from "./RobotCat";

export default class SolarRobotCat extends RobotCat{

    constructor(id: number){
        super("");
        //this.id = this.somethingRandom();
    }

    charge(): string {
        return super.charge() + "with solar circuit...";
    }
/*
    private somethingRandom(): number (){
        return 1;
        
    }*/
    // method signature: name + parameters (type and number of parameters)
}