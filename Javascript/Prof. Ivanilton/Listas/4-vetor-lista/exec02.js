/**
 * Faça um programa que leia dois vetores A e B com 10 elementos cada e
 *  calcule quantos elementos de A são maiores que qualquer elemento de B. 
 */

 "use strict"

 const prompt = require("prompt-sync")();
 
 let vetA = [], vetB = [], cont = 0;
 
 for (let i = 0; i < 7; i++) {
     vetA[i] = prompt("informe um valor para o vetor A")
 }
 
 for (let i = 0; i < 7; i++) {
     vetB[i] = prompt("informe um valor para o vetor B")
 }

 for (let i = 0; i < 10; i++) {
    if (vetA[i] > vetB[i]) {
        cont++;
    }
 }

 console.log("A quantidade de valores de A que são maior que B é de: ",cont);