export default class Animal {
    protected name: string;
    protected speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }

    getName(): string {
        return this.name;
    }

    static generateRandomSpeed(maxSpeed: number): number {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }

    static printWinner(animal: Animal) {
        if (animal != undefined) {
            console.log(`The Winner is ${animal.getName()} with speed ${animal.getSpeed()} km/h`);
        } else {
            console.log('Please add animals!');
        }
    }
}