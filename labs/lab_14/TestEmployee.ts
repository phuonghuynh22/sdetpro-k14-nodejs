import ContractEmployee from "./ContractEmployee";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

/*

Create a class Employee with a method salary to return employee’s salary
There are 2 types of employee: Full time employee and contract employee
Full time employee has salary is 50000 and contract employee has salary 40000
Write a method to accept a list of Employee and calculate total salary

Please print out the employee with highest/lowest salary
For example, company has 3 FTE and 2 contractor
Optional:
Research and try to sort employees base on salary, name

*/
let fteA = new FTE('fte A');
let ceB = new ContractEmployee('ce B');
let ceC = new ContractEmployee('ce C');
let employeeList = [fteA, ceB, ceC];

let totalSalary = EmployeeController.calculateTotalSalary(employeeList);
console.log(`Total salary: ${totalSalary}`);
let highestSalary =  EmployeeController.highestSalary(employeeList);
console.log(highestSalary);

