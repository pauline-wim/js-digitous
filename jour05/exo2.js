// 02 - Table

const prompt = require("prompt");
const authFunctions = require("./authFunctions");

prompt.start();

prompt.get('Multiply', function (err, res) {
    return authFunctions.multiply(res.Multiply);
});
