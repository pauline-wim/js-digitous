// 01 - Calculator

const prompt = require("prompt");

prompt.start();

prompt.get('Calculate', function (err, res) {
    // console.log(res.Calculate);
    if (res.Calculate.length === 3) {
        console.log(calculate(res.Calculate[0], res.Calculate[2], res.Calculate[1]));
    } else {
        console.log("Error");
    }
  });

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

// console.log(calculate(5, 4, "x"));

