import Employee from "./Employee";

export default class ContractEmployee extends Employee {

    
    constructor(name: string) {
        super(name);
        this.salary = 60000;
    }
}