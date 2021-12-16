// 06 - Reverse

let sentence = "Hello Konexio !";
let reversedSentence = "";

for (let i = sentence.length - 1; i >= 0; i--) {
  reversedSentence += sentence[i];
}

console.log(reversedSentence)

// option 2 -> moins efficace

sentence = "Bye Konexio !";
let letters = sentence.split("");
let result = [];

for (let i = letters.length; i >= 0; i--) {
  result.push(letters[i]);
}

result = result.join("");
console.log(result);