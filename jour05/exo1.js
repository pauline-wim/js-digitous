// 01 - Calculator

// const prompt = require("prompt");

// prompt.start();

// prompt.get('Calculate', function (err, res) {
//     // console.log(res.Calculate);
//     if (res.Calculate.length === 3) {
//         console.log(calculate(res.Calculate[0], res.Calculate[2], res.Calculate[1]));
//     } else {
//         console.log("Error");
//     }
//   });

function calculate(num1, operator, num2) {
    if (num2 === undefined) {
        return console.log("error");
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
    }
}

console.log(
    calculate(
        parseInt(process.argv[2]),
        process.argv[3],
        parseInt(process.argv[4])
    )
)

// console.log(calculate(5, 4, "x"));

