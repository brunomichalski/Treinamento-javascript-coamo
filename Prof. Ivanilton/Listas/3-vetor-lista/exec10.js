
/**
 * Faça um programa que leia um vetor A com 30 números inteiros e 
 * construa um vetor B cujos elementos são os elementos de A multiplicados pelo maior elemento de A.
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [];

for (let i = 0; i < 10; i++) {
    vetA[i] = Number(prompt("informe 10 números inteiros positivos: (VetorA)"));
}

let maior = '';
for (let i = 0; i < 10; i++) {
    if (maior < vetA[i]) {
        maior = vetA[i];
    }
}

for (let i = 0; i < 10; i++) {
    vetB[vetB.length] = (vetA[i] * maior); 
}

console.log("Vetor A: ", vetA);
console.log("Vetor B: ", vetB);