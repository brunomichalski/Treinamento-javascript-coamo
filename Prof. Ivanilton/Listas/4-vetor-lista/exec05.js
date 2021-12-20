/**
 * Faça um programa que leia um vetor A com 24 posições. 
 * Em seguida, preencha uma matriz B 4x6, com os elementos do vetor A. 
 * A matriz B deve ser preenchida linha a linha.
 *  Em seguida, preencha uma matriz C 6x4 com os elementos do vetor A,
 *  preenchendo a matriz coluna a coluna. Apresente as duas matrizes em tela.

 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], matB = [], matC = [], cont = 0;

for (let i = 0; i < 24; i++) {
    Number(vetA[i] = prompt("informe um valor para o vetor A"));
}

for (let i = 0; i < 4; i++) {
    matB[i] = [];
    for (let j = 0; j < 6; j++) {
        matB[i][j] = vetA[cont];
        cont++
    }
}

cont = 0;
for (let i = 0; i < 6; i++) {
    matC[i] = [];
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
        matC[j][i] = vetA[cont];
        cont++
    }
}

console.log(matB);
console.log();
console.log(matC);