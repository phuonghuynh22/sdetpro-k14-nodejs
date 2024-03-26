import BatteryRobotCat from "./BatteryRobotCat";
import { charge } from "./Charger";
import RobotCat from "./RobotCat";
import SolarRobotCat from "./SolarRobotCat";

//const robotCat = new RobotCat("Robot", 1);
//robotCat.charge();
//console.log(robotCat.name);


const solarRobotCat = new SolarRobotCat(1);
//solarRobotCat.getId = 2;
const batterRobotCat = new BatteryRobotCat('Battery');

charge([solarRobotCat, batterRobotCat]);