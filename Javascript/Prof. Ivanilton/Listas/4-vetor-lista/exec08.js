/**
 * Faça um programa que leia um vetor A com 50 números e calcule um vetor B com os 10 maiores valores de A. 
 */

 "use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [];

for (let i = 0; i < 50; i++) {
    vetA[i] = Number(prompt("informe um valor para o vetor A"));
}

vetA.sort((a,b) => a - b);

for (let i = 10; i > 0; i--) {
    vetB.push(vetA[vetA.length-i]);
}

console.log(vetA);
console.log(vetB);
