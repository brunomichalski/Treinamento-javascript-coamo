/**
 * Faça um programa que leia dois vetores A e B com 7 números cada. Construir uma matriz C, 
 * onde a primeira coluna deverá ser formada pelos elementos do vetor A e
 *  a segunda coluna deverá ser formada pelos elementos do vetor B.
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [], mat = [];

for (let i = 0; i < 7; i++) {
    vetA[i] = prompt("informe um valor para o vetor A")
}

for (let i = 0; i < 7; i++) {
    vetB[i] = prompt("informe um valor para o vetor B")
}

for (let i = 0; i < 2; i++) {
    mat[i] = [];
    for (let j = 0; j < 7; j++) {
        if (i == 0) {
            mat[i][j] = vetA[i];
        }
        if (i == 1) {
            mat[i][j] = vetB[i];
        }
    }
}
console.log(mat);