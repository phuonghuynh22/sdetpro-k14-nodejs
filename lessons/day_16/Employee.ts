export default abstract class Employee {
    protected name: string;
    protected salary: number = 0;
    protected supportSalary: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }


    abstract getSalary(): number;
    abstract getSupportSalary():number;
}