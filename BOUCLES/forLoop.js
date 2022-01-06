// 01 - Somme des carrés

let sum = 0;

for (let i = 5; i <= 10; i++) {
    sum += i * i;
}

console.log(sum);

// 02 - Comptons

// Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
// Résultat attendu: 128

let multi = 0;

for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        multi += 1;
    }
}

console.log(multi)

// 03 - Chanceux

// Lancez un dé 20 fois et affichez la somme de tous les résultats plus grand ou égale à 5

