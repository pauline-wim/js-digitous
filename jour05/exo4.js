const prompt = require("prompt");

prompt.start();

const mysteryNum = Math.floor(Math.random() * 100) + 1;

function play() {
	prompt.get(
		{ name: "numUser", description: "Quel est le nombre mystère ?" },

		function (err, res) {
			const numUser = parseInt(res.numUser);

			// null OU undefined === false
			if (err) {
				return console.log(err, "Something went wrong");
			}

			if (isNaN(res.numUser)) {
				console.log("Please enter a number");
				return play();
			}

			if (numUser === mysteryNum) {
				return console.log("Bravo");
			} else if (numUser > mysteryNum) {
				console.log("C'est moins");
			} else {
				console.log("C'est plus");
			}

			play();
		}
	);
}

play();