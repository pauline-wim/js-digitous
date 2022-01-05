// BONUS I


function makeItSpongeBob(word) {
    let newStr = "";

    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            newStr += word[i].toUpperCase();
        } else {
            newStr += word[i].toLowerCase();
        }
    }
    newStr += " ";

    return newStr
}

console.log(makeItSpongeBob("Javascript is easy"));


// else if (word[i] === " ") {
//    newStr += word[i];
// }