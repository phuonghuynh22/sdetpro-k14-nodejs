class RacingFunctions {
    compareSpeed(animalList){
        let highestSpeed = 0;
        let winner;
        for(let i = 0; i < animalList.length; i++){
            if (animalList[i].speed >= highestSpeed ){
                highestSpeed = animalList[i].speed;
                winner = animalList[i].animalType;
            }
        }
        return `The winner is ${winner}, with speed ${highestSpeed} Km/h`;
    }
}

module.exports = RacingFunctions;