// Bonus - Black Jack

// Vous connaissez le Black Jack ? Aujourd'hui, on va le coder ! Petit rappel des règles :
// - Le joueur démarre avec un score de 0
// - La banque démarre avec un score aléatoire entre 16 et 21, qui restera caché jusqu'à la fin de la partie
// - À chaque tour, on propose au joueur de tirer une carte et il peut :
//     - Tirer une carte de valeur aléatoire entre 1 et 10 : cette valeur est ajoutée à son score. 
//      Si son score est supérieur à 21, la partie se termine automatiquement, 
//      sinon on passe au tour suivant (option "draw")
//     - Passer son tour uniquement si son score est supérieur à 16 ce qui met fin à la partie (option "pass")
// - À la fin de la partie, on annonce le score du joueur et de la banque ainsi que le résultat :
//     - Le score du joueur est supérieur à 21 ⇒ il perd
//     - Le score du joueur est 21 ⇒ il fait un "Black Jack" et gagne
//     - Le score du joueur est supérieur au score de la banque ⇒ il gagne
//     - Le score est inférieur ou égal au score de la banque ⇒ il perd

const prompt = require("prompt");

prompt.start();

let player = 0;
let bank = Math.floor(Math.random() * (21 - 16 + 1)) + 16;

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
    } else if (player <= bank) {
        console.log(`Your score is of ${player}. You lose...`);
    } else if (player = 21 || player > bank) {
        console.log(`BLACK JACK! Your score is of ${player}.`);
        console.log("You win! Congrats, you lucky bastard!");
    }
};

game();