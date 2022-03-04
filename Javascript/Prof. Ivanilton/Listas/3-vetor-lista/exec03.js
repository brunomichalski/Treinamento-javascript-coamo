/**
 * Faça um programa que leia um vetor A com 25 números inteiros e
 *  retorne a posição do seu maior e do seu menor valor. 
 */

 const prompt = require("prompt-sync")();

let vetA = [];
let menor, maior;
let posMe, posMa;
for (let i = 0; i < 25; i++) {
    vetA[i] = Number(prompt("informe 25 números inteiros: "));
}
menor = vetA[1];
maior = vetA[1];

for (let i = 0; i < 25; i++) {
    if (vetA[i] > maior) {
        maior = vetA[i];
        posMa = i;
    }
    if (vetA[i] < menor) {
        menor = vetA[i];
        posMe = i;
    }
}

console.log(`O maior valor: ${maior}, está na posição: ${posMa}`);
console.log(`O menor valor: ${menor}, está na posição: ${posMe}`);