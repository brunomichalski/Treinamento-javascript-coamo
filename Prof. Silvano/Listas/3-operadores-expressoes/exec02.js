/*
screva um programa que lê dois números inteiros (ae b) e informa:
a.Multiplicação
b.Divisão real (a dividido por b). Ex: 5/2 = 2.5
c.Divisão inteira (a dividido por b). Ex: 5/2 = 2 (eresta 1)
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um número: "));
let num2 = Number(prompt("Infome o segundo valor: "));

let totalMult; 
let totalDivReal;
let TotalDivInt;

totalMult = num1 * num2;
totalDivReal = num1 / num2;
TotalDivInt = num1 % num2;

console.log(`A multiplicação de ${num1} * ${num2} é igual a ${totalMult}`);
console.log(`A divisão real de ${num1} / ${num2} é igual a ${totalDivReal}`);
console.log(`A divisão inteira de ${num1} % ${num2} é igual a ${TotalDivInt}`);