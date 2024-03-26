import RobotCat from "./RobotCat";

export function charge (robotCatList: NonNullable<RobotCat[]>) {

    robotCatList.forEach(robotCat => {
        console.log(robotCat.charge());
    })
}