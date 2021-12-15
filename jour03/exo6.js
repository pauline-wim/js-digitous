// 06 - Reverse

let sentence = "Hello Konexio !";
let reversedSentence = "";

for (let i = sentence.length - 1; i >= 0; i--) {
  reversedSentence += sentence[i];
}

console.log(reversedSentence)