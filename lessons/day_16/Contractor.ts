import Employee from "./Employee";

export default class ContractEmployee extends Employee {
    
    constructor(name: string) {
        super(name);
        this.salary = 40000;
    }

    getSalary(): number {
        return this.salary;
    }

    getSupportSalary(): number {
        return this.supportSalary; // from parent class
    }
}