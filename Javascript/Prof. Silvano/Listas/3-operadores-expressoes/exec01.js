/*
Escreva uma programa que lê dois números inteiros(a e b) e informa:
a.Adição
b.Subtração (subtrair b de a)
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um número: "));
let num2 = Number(prompt("Infome o segundo valor: "));

let totalAdi; 
let totalSub;

totalAdi = num1 + num2;
totalSub = num2 - num1;

console.log(`A adição de ${num1} + ${num2} é igual a ${totalAdi}`);
console.log(`A Subtração de ${num2} + ${num1} é igual a ${totalSub}`);