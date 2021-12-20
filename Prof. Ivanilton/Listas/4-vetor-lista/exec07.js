/**
 * Faça um programa que leia um vetor A com 10 posições. Em seguida, implemente as seguintes funções: 
● função para encontrar o maior valor deste vetor; 
● função para dizer se existem dois valores iguais no vetor. 

 */

"use strict"

const prompt = require("prompt-sync")();

let vetA = [];

for (let i = 0; i < 10; i++) {
    vetA[i] = Number(prompt("informe um valor para o vetor A"));
}

function maior(vetA) {
    let maior = vetA[0];
    for (let i = 0; i < 10; i++) {
        if (vetA[i] > maior) {
            maior = vetA[i];
        }
    }
    return maior;
}

function iguais(vetA) {
    let num = 0, cont = 0;
    for (let i = 0; i < 10; i++) {
        num = vetA[i];
        for (let j = 0; j < 10; j++) {
            if (num == vetA[j]) {
                cont++
            }

        }
        if (cont >= 2) {
            console.log("Há o número "+num+" mais de uma vez no vetor");
        }
        cont = 0;
    }
}

console.log("O maior valor do vetor é :"+ maior(vetA));
iguais(vetA);
