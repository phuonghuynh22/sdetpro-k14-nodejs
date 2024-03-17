const BatteryRobotCat = require('./BatteryRobotCat');
const Charger = require('./Charger');
const SolarRobotCat = require('./SolarRobotCat');

// Models
const batterRobotCat = new BatteryRobotCat();
const solarRobotCat = new SolarRobotCat();

// Usage
Charger.charge([batterRobotCat, solarRobotCat]);