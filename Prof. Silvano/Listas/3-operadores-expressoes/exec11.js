/*
Escreva um programa para calcular e imprimir anotafinalde uma disciplina. As seguintesnotas devem ser informadas pelo terminal:
a.Nota da prova 1;
b.Nota da prova 2;
c.Nota da prova 3;
d.Nota da prova de recuperação.
Anota finalé obtida pela média aritmética simplesde 3 notas. A nota da prova de recuperaçãodeve substituir a prova de menor nota.
*/

"use strict"

const prompt = require('prompt-sync')();

let nota1 = Number(prompt("informe nota1 : "));
let nota2 = Number(prompt("informe nota2: "));
let nota3 = Number(prompt("informe nota3 : "));
let recupera = Number(prompt("Informe a nota de recuparação:"));

let min = Math.min(nota1, nota2, nota3);

let total = nota1+nota2+nota3+recupera-min;

console.log("Nota final é: "+ total/3);
