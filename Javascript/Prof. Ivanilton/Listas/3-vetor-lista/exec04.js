/**
 * Faça um programa que leia um vetor A com 5 números inteiros positivos,
 *  calcule e mostre quais são os números primos e suas respectivas posições no vetor. 
 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [];

for (let i = 0; i < 5; i++) {
    vetA[i] = Number(prompt("informe 5 números inteiros positivos: "));
}

let cont = 0;
let pos;

for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= vetA[i]; j++) {
        if (vetA[i] % j == 0) {
            cont++;
        }

    }
    pos = i;
    if (cont == 2) {
        console.log(vetA[i] + " é um número primo e está na posição " + pos);
    }
    cont = 0;
}

