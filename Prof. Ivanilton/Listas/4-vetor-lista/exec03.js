/**
 * Faça um programa que leia dois vetores A e B com 12 elementos cada. 
 * Construir uma matriz C de duas dimensões, 
 * onde a primeira coluna da matriz C deverá ser formada pelos elementos do vetor A multiplicados por 2 e
 *  a segunda coluna deverá ser formada pelos elementos do vetor B subtraídos de 5. 
 */

 "use strict"

 const prompt = require("prompt-sync")();
 
 let vetA = [], vetB = [], mat = [];
 
 for (let i = 0; i < 12; i++) {
     Number(vetA[i] = prompt("informe um valor para o vetor A"));
 }
 
 for (let i = 0; i < 12; i++) {
     Number(vetB[i] = prompt("informe um valor para o vetor B"));
 }
 
 for (let i = 0; i < 2; i++) {
     mat[i] = [];
     for (let j = 0; j < 12; j++) {
         if (i == 0) {
             mat[i][j] = (vetA[i] * 2);
         }
         if (i == 1) {
             mat[i][j] = (vetB[i] - 5);
         }
     }
 }
 console.log(mat);