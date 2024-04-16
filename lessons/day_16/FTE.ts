import Employee from "./Employee";

export default class FTE extends Employee {
    
    constructor(name: string) {
        super(name);
        this.salary = 50000;
    }

    getSalary(): number {
        return this.salary;
    }

    getSupportSalary(): number {
        return 5000;
    }
}