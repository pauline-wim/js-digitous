function multiply(n) {
    for (let i = 1; i <= 10; i++) {
        finalResult = n * i;
        console.log(`${n} x ${i} =`, finalResult)
    }
};

function addition(n) {
    for (let i = 0; i <= 10; i++) {
        finalResult = n + i;
        console.log(`${n} + ${i} =`, finalResult);
    }
};

module.exports = {
    multiply,
    addition,
};