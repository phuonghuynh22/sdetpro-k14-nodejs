import Animal from "./Animal";
import AnimalRacing from "./AnimalRacing";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const horse = new Horse('Horse');
const tiger = new Tiger('Tiger');
const dog = new Dog('Dog');

const winner = AnimalRacing.getWinner([horse,tiger,dog]);
Animal.printWinner(winner);

