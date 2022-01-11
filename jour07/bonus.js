const prompt = require("prompt");

prompt.start();

// let mysteryWord = [{
//     word: "chemise", 
//     pattern: "_",
//     hidden: true,
// }];

// const randomWord = "chemin";
// let tab = randomWord.split("");

// console.log(tab);

// let mot = ["c", "h", "e", "m", "i", "n"];
// let userWord = [];

// for (let i = 0; i <= mot.length; i++) {
//     userWord += "_";
// }

// console.log("userWord:", userWord)

// let userWord = [];

let numCallbackRuns = 0

// mysteryWord.forEach(function (el) {
//     console.log(el)
//     numCallbackRuns++;
//     userWord.push(el);
// })

// console.log(userWord);

const randomWord = "chemin";
let tab = randomWord.split("");

let mysteryWord = [{
    name: [], 
    pattern: "_",
    hidden: true,
}];

let empty = [];

// for (let i = 0; i <= randomWord.length; i++) {
//     empty += "_";
//     userWord = empty.split("");
// }

// console.log(userWord);

function game() {

    prompt.get(

        {name: 'userEntry', description: "Guess a letter from the mystery word"},

        function (err, res) {

            if (err) {
                console.log("Something went wrong", err);
            }

            let letters = tab.filter(function (oneLetter) {
                if (res.userEntry === oneLetter) {
                    return empty.push(oneLetter);
                } // else {
                //     // console.log(`oups... plus que ${n} chances !`);
                //     console.log("wrong letter, try again...")
                // }
            });
            let userWord = letters.map(function (el) {
                console.log(el, letters)
            });
            console.log(userWord.join());
            console.log("userWord", userWord);
            console.log("letters", letters);
            game();
        }
    );
};

game();
