/**
 * Faça um programa que leia um vetor A com 30 números inteiros e calcule dois vetores, 
 * um com os números pares de A e outro com os ímpares. 
 */

 "use strict"

const prompt = require("prompt-sync")();

let vetA = [], vetPar = [], vetImpar = [];

for (let i = 0; i < 30; i++) {
    vetA[i] = Number(prompt("informe um valor para o vetor A"));
}

for (let i = 0; i < 30; i++) {
    if (vetA[i] % 2 == 0) {
       vetPar.push(vetA[i]);
    }else{
        vetImpar.push(vetA[i]);
    }
}

console.log(vetPar);
console.log(vetImpar);