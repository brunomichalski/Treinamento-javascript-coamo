/**
 * Faça um programa que leia um vetor A com 30 números inteiros. 
 * Construir um vetor B do mesmo tipo observando a seguinte lei de formação:
 *  todo elemento de B deve ser o cubo do elemento de A correspondente. 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [];

for (let i = 0; i < 30; i++) {
    vetA[i] = Number(prompt("informe 30 números inteiros: "));
}

for (let i = 0; i < 30; i++) {
    vetB[i] = vetA[i] ** 3;
}

console.log(vetA);
console.log(vetB);