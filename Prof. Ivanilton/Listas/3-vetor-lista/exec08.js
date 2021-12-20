/**
 * Faça um programa que leia dois vetores A e B com 10 números reais cada e crie um vetor C, que é a união de A e B.
 *  O vetor C deve conter todos os elementos únicos de A e B, isto é, sem repetição de valores (C = A U B).
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [], vetC = [];

for (let i = 0; i < 5; i++) {
    vetA[i] = Number(prompt("informe 5 números inteiros positivos: (VetorA)"));
}

for (let i = 0; i < 5; i++) {
    vetB[i] = Number(prompt("informe 5 números inteiros positivos: (VetorB)"));
}

// compara números do vet A
for (let i = 0; i < 5; i++) {
    let cont = 0;
    let num = vetA[i];
    for (let j = 0; j < 5; j++) {
        if (num == vetA[j]) {
            cont++;
        }
        if (num == vetB[j]) {
            cont++;
        }
    }
    if (cont == 1) {
        vetC[vetC.length] = num;
    }
    cont = 0;
}

// compara números do vet B
for (let i = 0; i < 5; i++) {
    let cont = 0;
    let num = vetB[i];
    for (let j = 0; j < 5; j++) {
        if (num == vetB[j]) {
            cont++;
        }
        if (num == vetA[j]) {
            cont++;
        }
    }
    if (cont == 1) {
        vetC[vetC.length] = num;
    }
    console.log(cont);
    cont = 0;
}

console.log("Vetor A: ", vetA);
console.log("Vetor B: ", vetB);
console.log("Vetor C: ", vetC);