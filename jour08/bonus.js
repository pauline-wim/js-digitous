// Bonus - Black Jack

const prompt = require("prompt");

prompt.start();

let firstCard = Math.floor(Math.random() * 10) + 1;
let hiddenCard = Math.floor(Math.random() * 10) + 1;

let player = firstCard + hiddenCard;
let bank = Math.floor(Math.random() * (21 - 16 + 1)) + 16;

console.log("Dealing... You get two cards, one known and one unknown.");
console.log("First card: unknown");
console.log("Second card:", firstCard);

function game() {

    prompt.get(

        {name: 'dealer', description: "Draw or pass"},

    function (err, res) {
        if (err) {
            console.log("Something went wrong", err);
        }

        if (res.dealer === "Draw" || res.dealer === "draw") {
                let newCard = Math.floor(Math.random() * 10) + 1;
                console.log(newCard);
                player += newCard;
                return game();
        } else if (res.dealer === "pass" || res.dealer === "Pass") {
            if (player > 16) {
                endGame();
                console.log('End of game');
            } else {
                console.log("Nope, pick again");
                game();
            }
        }
    })

};

function endGame() {
    if (player > 21) {
        console.log(`Your score is of ${player}. You lose...`);
        console.log(`The dealer's hand was of ${bank}.`);
    } else if (player <= bank) {
        console.log(`Your score is of ${player}. You lose...`);
        console.log(`The dealer's hand was of ${bank}.`);
    } else if (player = 21 || player > bank) {
        console.log(`BLACK JACK!`);
        console.log("You win! Congrats, you lucky bastard!");
        console.log(`Your score: ${player}.`);
        console.log(`The dealer's hand: ${bank}.`);
    }
};

game();