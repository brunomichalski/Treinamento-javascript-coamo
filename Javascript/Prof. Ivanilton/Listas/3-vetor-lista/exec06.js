/**
 * Faça um programa que dados dois vetores A (5 elementos) e B (5 elementos) de números inteiros 
 * (considere que foram digitados em crescente), 
 * construa um programa para intercalar os vetores A e B de tal modo que o novo vetor C (10 elementos) 
 * também esteja ordenado. OBS. Não se preocupe com a ordenação: 
 * assuma que o usuário vai digitar os valores na ordem correta. 
Exemplo: A = {1,1,2,4,7} e B = {1,2,5,7,8} C = {1,1,1,2,2,4,5,7,7,8} 
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

let k = 0;
let j = 0;

for (let i = 0; i < 10; i++) {
    if (vetA[j] < vetB[k]) {
        vetC[vetC.length] = vetA[j];
        j++;
    }else {
        vetC[vetC.length] = vetB[k];
        k++;
    }
   
}


console.log("Vetor A: ", vetA);
console.log("Vetor B: ", vetB);
console.log("Vetor C: ", vetC);
