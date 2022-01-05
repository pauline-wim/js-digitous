// 02 - Table

const prompt = require("prompt");

prompt.start();

prompt.get('Multiply', function (err, res) {
    function multiply(n) {
        for (let i = 1; i <= 10; i++) {
            finalResult = n * i;
            console.log(finalResult);
        }
    };
    return multiply(res.Multiply);
});
