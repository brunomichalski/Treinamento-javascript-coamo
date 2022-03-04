/**
 * Faça um programa que leia um vetor A com 10 números inteiros e 
 * verifique quantas vezes um número X (digitado pelo usuário) aparece no vetor. 
 * 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [];

for (let i = 0; i < 10; i++) {
    vetA[i] = Number(prompt("informe 10 números inteiros positivos: (VetorA)"));
}

let num = Number(prompt("\ninforme um número para saber quantas vezes aparece no vetor: "));
let cont = 0;
for (let i = 0; i < 10; i++) {
    if (vetA[i] == num) {
        cont++;
    }
}

console.log(`O valor ${num} aparece ${cont} vezes no vetorA`);
