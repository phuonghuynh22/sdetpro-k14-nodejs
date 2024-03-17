export default class RobotCat {

    protected name: string;
    private id: number;


    constructor (name: string, id: number){
        this.name = name;
        this.id = id;
    }

    // setter: change current value of a property to a new one

    // getter: get current value of a property

    setId(id: number): void {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    charge(){
        return 'charging...';
    }
}