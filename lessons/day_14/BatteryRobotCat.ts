import RobotCat from "./RobotCat";

export default class BatteryRobotCat extends RobotCat{

    charge(): string {
        return super.charge() + "with batter circuit..."
    }

    // method signature: name + parameters (type and number of parameters)
}