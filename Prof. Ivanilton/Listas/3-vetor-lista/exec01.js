/**
 * Faça um programa que leia um vetor A com 10 números inteiros positivos. Construir um vetor B do mesmo tamanho,
 *  sendo que cada elemento do vetor B seja o fatorial do elemento correspondente do vetor A. 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetB = [];

for (let i = 0; i < 10; i++) {
    vetA[i] = Number(prompt("informe 10 números inteiros positivos: "));
}

for (let i = 0; i < 10; i++) {
    let num = vetA[i];
    let soma = 1;
    for (let j = 1; j <= num-1; j++) {
        soma *= (j+1);    
    }
    vetB[vetB.length] = soma; 
    console.log(soma);
}

console.log(vetA);
console.log(vetB);