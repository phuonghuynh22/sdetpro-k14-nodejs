import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

let teo = new FTE('Teo');
let ti = new FTE('Ti');
let tun = new Contractor('Tun');
let employeeList = [teo,ti,tun];

let totalSalary = EmployeeController.getTotalSalary(employeeList);
console.log(`Total salary: ${totalSalary}`);