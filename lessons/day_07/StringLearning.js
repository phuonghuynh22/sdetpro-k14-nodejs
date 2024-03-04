let myString = '1234abcd  ';
console.log(myString);

// length
console.log(myString.length);

for (let index = 0; index < myString.length; index++) {
    console.log(myString.charAt(index));
}

// Replace

// Em phai hi sinh →> remove m

let toBeReplacedStr = "tmomi mnmay gmap mnmhamu 7h";
// /g global, /i insensitive\
//console.log(toBeReplacedStr.replace(/m/gi,""));

console.log(toBeReplacedStr.replaceAll('m',''));

// 200mins
let containingNumStr = "200mins";
let num = containingNumStr. replace(/[^0-9]/gi, "");
console. log (num) ;

// Backstick | String Template
let anotherVar = "567890-"
console. log(`typeof num: ${checkTypeOf(num)} ${anotherVar}`);
console. log (Number(num) + 1);

// Concatenation / concat
console.log("Hello, ".concat("Tui ten Teo!") + ", how are you?");
function checkTypeOf(sth){
 return typeof sth;
}