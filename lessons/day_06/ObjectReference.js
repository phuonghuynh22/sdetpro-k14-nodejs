let teo = {
    name: 'Tui',
    myAge: 18,
    bankAccount: {
        accNum: '11223344',
        balance: 1000000
    }
}
/*
let ti = teo;
ti.name = 'Ti';
ti.myAge = 19; 
*/

console.log(teo); // deu ra thong tin Ti
console.log(ti); // deu ra thong tin Ti

//-------
let array = [teo, teo];
array[1].name = 'Ti';

console.log(array); //deu ra thong tin Ti

// => du lieu tham chieu


//-----
//-----
// Shallow copy - spread syntax  => one level

var ti = { ...teo }
ti.name = 'Ti';

console.log(teo); // teo
console.log(ti);  // ti


ti.bankAccount.balance = 1;

console.log(teo); // balance of ti
console.log(ti);  // balance of ti

// Shallow copy - Handle for nested object, array..(not for function, circular)
let tin = JSON.parse(JSON.stringify(teo));
tin.name = 'Tin';
tin.bankAccount.balance = 10;

console.log(teo);
console.log(tin);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merge = [...arr1,...arr2];
console.log(merge);

// Object.keys(targetObject)
console.log(Object.keys(tin));

// Object.values(targetObject)
console.log(Object.values(tin));

// Object.entries(targetObject)
console.log(Object.entries(tin));