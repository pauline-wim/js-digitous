// 01 - Number

let integer = 102;
let float = 13.5;

console.log(integer, float);

// 02 - Convert

let basic = 34;
let  stringified = basic.toString();

console.log(stringified);

// 03 - Round

let num = 1.5;
let rounded = Math.round(num);

console.log(rounded);

// 04 - Arithmétique

let test = 12;
let bis = 5;

console.log("Addition : ", test + bis);
console.log("Soustraction : ", test - bis);
console.log("Multiplication : ", test * bis);
console.log("Division : ", test / bis);
console.log("Modulo : ", test % bis);

// 05 - Comparaison

test = 143;
bis = 219;

console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test === bis);

// 06 - Condition

let limit = 50;
let score = 64;

if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}

score = 49;

console.log(score >= limit ? "Ok good !" : "Oh nooo...");

// 07 - Condition II

let password = "azerty";

if (password.length > 5) {
    console.log("The password is secure");
}

// 08 - Condition III

// score = 50;
// password = "azert";

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}
