const inputNum = getUserInputNum();

if (inputNum === 2) {
    console.log('Mon');
} else if (inputNum === 3) {
    console.log('Tue');
} else if (inputNum === 4) {
    console.log('Wed');
} else if (inputNum === 5) {
    console.log('Thu');
} else if (inputNum === 6) {
    console.log('Fri');
} else if (inputNum === 7 || inputNum === 8) {
    console.log('Weekend');
} else {
    console.log('Input again! 2 -> 8');
}

switch (inputNum) {
    case 2:
        console.log('mon');
        break;
    case 3:
        console.log('tue');
        break;
    case 4:
        console.log('wed');
        break;
    case 5:
        console.log('thu');
        break;
    case 6:
        console.log('fri');
        break;
    case 7:
    case 8:
        console.log('weekend');
        break;
    default:
        console.log('Input again! 2 -> 8');
}