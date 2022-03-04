/**
 * Faça um programa que leia um vetor A com 50 números reais e 
 * calcule a quantidade de valores que estão acima da média aritmética de todos os valores contidos em A.
 * 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [];

for (let i = 0; i < 50; i++) {
    vetA[i] = Number(prompt("informe 10 números inteiros positivos: (VetorA)"));
}

let media = 0;
for (let i = 0; i < 50; i++) {
    media += vetA[i];
}
media = media / 50;

let cont = 0;
for (let i = 0; i < 50; i++) {
    if (vetA[i] > media) {
        cont++;
    }
}

console.log("O número de valores maiores que a média no vetorA é: ", cont);
