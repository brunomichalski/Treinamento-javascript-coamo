/**
 * Dado um número natural M, escreva um programa que exibe um triângulo centralizado formado
por caracteres ‘X’, com M caracteres de altura. OBS: a quantidade de X’s em cada linha é sempre
ímpar e cresce em 2 unidades: 1, 3, 5, 7, 9, ...
Para m = 4: X
           XXX
          XXXXX
         XXXXXXX

 * 
 */

const prompt = require("prompt-sync")();

let m = prompt('Informe número natural M para altura: ')
if (m < 0 || (m % 1 != 0)) {
    console.log("numero não e inteiro")
}

let linha = ""
let i = 1
let altura = i 

for (i = 1; i <= m; i++) {

    for (let j = m - i; j >= 1; j--) {
        linha += " "
    }

    for (let k = 1; k <= altura; k++) {
        linha += "X"
    }
    altura += 2;
    linha += "\n"
}

console.log(linha)