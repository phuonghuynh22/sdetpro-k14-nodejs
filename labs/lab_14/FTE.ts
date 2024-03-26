import Employee from "./Employee";

export default class FTE extends Employee {
    
    constructor(name: string) {
        super(name);
        this.salary = 50000;
    }
}