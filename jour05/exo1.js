// 01 - Calculator

const prompt = require("prompt");

prompt.start();



function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "x":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
    }
}

console.log(calculate(5, 4, "x"));

