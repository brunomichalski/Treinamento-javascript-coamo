/**
 * Faça um programa que leia um vetor A com 30 numeros e construa um vetor B, 
 * cujos elementos são os valores de A multiplicados pelo seu índice. 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [];

for (let i = 0; i < 30; i++) {
    vetA[i] = Number(prompt("informe 30 números inteiros positivos: "));
}

for (let i = 0; i < 30; i++) {
    vetB[i] = vetA[i] * i;
}

console.log("vetor A",vetA);
console.log("vetor B",vetB);