export default class Employee {
    protected name: string;
    protected salary: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }


    getSalary(): number {
        return this.salary;
    }
}