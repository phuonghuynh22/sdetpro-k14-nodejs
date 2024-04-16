class Person {
    private name: string = '';
    private age: number = 0;

    constructor(name: string, age: number) {
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }

    // service method
    setAge(age: number): void {
        this.validateAge(age);
        this.age = age;
    }

    // support method
    private validateAge(age: number): void{
        if (age<0){
            throw new Error('Age should be greater than 0!');
        }
    }
}