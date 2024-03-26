import Employee from "./Employee";

export default class EmployeeController {

    static calculateTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        });
        return totalSalary;
    }

    static highestSalary(employeeList: Employee[]){
        let emp;
        let highestSalary = employeeList[0].getSalary();
        for (let i = 0; i < employeeList.length; i++) {
            if (highestSalary < employeeList[i].getSalary()) {
                highestSalary = employeeList[i].getSalary();
                emp = employeeList[i].getName();
            }
        }
        return `${emp} has the highest salary ${highestSalary}`;
    }
}

