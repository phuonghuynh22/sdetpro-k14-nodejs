class Robot {
    
    // shared value and belongs to class, NOT object
    static id = 0;

    constructor(){
        this.name = 'Robot';
        Robot.id++;
    }

    getId(){
        return Robot.id;
    }

    static doSthing(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

module.exports = Robot;

const robot1 = new Robot();
Robot.doSthing();
const robot2 = new Robot();

console.log(robot1.getId());
console.log(robot2.getId());
