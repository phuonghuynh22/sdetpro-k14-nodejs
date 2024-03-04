function askQuestion(question){
    console.log(this.name);
    console.log(question);
}

console.log('1. Toi nha Teo');
const question = '2. Hoi Teo uong cf khong';

setTimeout(askQuestion.bind({name: 'Tui....'}, question), 3000); // dua dinh nghia ham, chu ko goi gam
console.log('3. Chay toi quan cf');
