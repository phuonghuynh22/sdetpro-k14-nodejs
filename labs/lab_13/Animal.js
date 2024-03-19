/**
 * Racing animal simple version*
When an animal was born, it will have a random speed with below info

Horse: Max 75 km/h
Tiger: Max 100 Km/h
Dog: Max 60 KM/h*

Create an Animal class with a method getSpeed() which return animal's speed
Create 3 objects for those 3 animal type

Run and see which animal is winner for racing

Print result with format: Winner is <Animal name>, with speed: <speed>

Ex: const randomNumber = Math.floor(Math.random() * 100) + 1;
 * 
 */

class Animal {
    constructor(animalType){
        this.animalType = animalType;
    }

    getSpeed(maxSpeed){
        return this.speed = Math.floor(Math.random() * maxSpeed) + 1;;
    }

    getInfo(randomSpeed){
        console.log(`${this.animalType}, with speed ${randomSpeed} Km/h`);
    }
}

module.exports = Animal;