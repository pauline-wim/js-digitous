// 04 - Compare

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger");
    } else if (num1 === num2) {
        console.log("both are the same");
    } else {
        console.log("num2 is bigger");
    }
}

compare(12, 4);  // num1 >
compare(4, 4);  // ===
compare(12, 14);  // num2 >
compare(-12, -4);  // num2 >

