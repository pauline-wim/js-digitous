const prompt = require("prompt");

prompt.start();

let mysteryWord = [{
    word: "chemise", 
    pattern: "_",
    hidden: true,
}];


// let n = 0;

// while (n <= 10) {

    // n += 1;

    prompt.get(

        {name: 'userEntry', description: "Guess a letter from the mystery word"},

        function (err, res) {

            if (err) {
                console.log("Something went wrong", err);
            }

            let letters = mysteryWord.filter(function (oneLetter) {
                if (res.userEntry === oneLetter.word) {
                    return letters.hidden === false;
                } else {
                    console.log(`oups... plus que ${n} chances !`);
                }
            });
        }
    );
// };
