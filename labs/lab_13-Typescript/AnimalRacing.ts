import Animal from "./Animal";

export default class AnimalRacing {
    static getWinner(animalList: Animal[]) {
        let winner = animalList[0];
        animalList.forEach(animal => {            
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        })
        return winner;
    }
}