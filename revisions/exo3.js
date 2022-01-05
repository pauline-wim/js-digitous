// 03 - Palindrome

function checkPal(string) {
    const split = string.split("");
    let checkLetters = 0;

    for (let i = 0, j = split.length - 1; i <= split.length - 1; i++, j--) {
        if (split[i] === split[j]) {
            checkLetters += 1;
        }
    }

    if (checkLetters === split.length) {
        console.log("palindrome !");
    } else {
        console.log("Nope");
    }
}

checkPal("racecar");
checkPal("laptop");

// option 2

function checkPal2(str) {
    let reversedStr = str.split("").reverse().join("");

    if (reversedStr === str) {
        return "palindrome";
    } else {
        return "Nope";
    }
}

console.log(checkPal2("racecar"));
console.log(checkPal2("laptop"));

// option 3 -> +rapide (condition ternaire)

function checkPal3(str) {
    return str.split("").reverse().join("") === str ? "palindrome" : "nope";
}

console.log(checkPal3("racecar"));
console.log(checkPal3("laptop"));


