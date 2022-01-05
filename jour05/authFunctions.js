function multiply(n) {
    for (let i = 1; i <= 10; i++) {
        finalResult = n * i;
        console.log(finalResult);
    }
};

function addition(n) {
    for (let i = 0; i <= 10; i++) {
        finalResult = n + i;
        console.log(finalResult);
    }
};

module.exports = {
    multiply,
    addition,
};