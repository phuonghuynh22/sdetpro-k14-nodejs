const readline = require('readline-sync');

function countWords() {
    const groupWords = {};

    const userInput = readline.question('Input your senctence: ');
    if (userInput !== '') {
        const words = userInput.split(' ');
        words.forEach(function (word) {
            if (groupWords.hasOwnProperty(word)) {
                groupWords[word]++;
            } else {
                groupWords[word] = 1;
            }
        });
        console.log(groupWords);
    } else {
        console.log('Input sentence again!');
    }
}

countWords();