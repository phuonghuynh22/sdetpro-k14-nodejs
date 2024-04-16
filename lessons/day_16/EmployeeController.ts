import Contractor from "./Contractor";
import Employee from "./Employee";
import FTE from "./FTE";

export default class EmployeeController {

    // without type casting and abstraction
    /*
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        });
        return totalSalary;
    }
    */


    // with type casting and parent class is not an abstract class
    /*
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            if (employee instanceof FTE) {
                const fte = (<FTE>employee);
                totalSalary = totalSalary + fte.getSalary() + fte.getSupportSalary();
            }
            else if (employee instanceof Contractor) {
                const contractor = (<Contractor>employee);
                totalSalary = totalSalary + contractor.getSalary();
            }
        });
        return totalSalary;
    }
    */

    // when parent class is an abstract class
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
                totalSalary = totalSalary + employee.getSalary() + employee.getSupportSalary();
         });
        return totalSalary;
    }
}