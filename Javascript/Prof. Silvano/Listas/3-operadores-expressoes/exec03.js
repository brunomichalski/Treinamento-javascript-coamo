/*
Escreva um programa que lê dois números inteiros (ae b) e informa:
a.Resto (utilizado o operador %)
b.Resto (sem utilizar o operador %)i.Dica: 
Faça a divisão “no papel” e observe quais outrasoperações podem serutilizadas para obter o resto
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um número: "));
let num2 = Number(prompt("Infome o segundo valor: "));

let num3;
let num4;

let TotalDivInt = num1 % num2;
let total = num1 / num2;
let totalInt = parseInt(total);

let ttotal = (total - totalInt) * num2;
console.log(`A divisão inteira de ${num1} % ${num2} é igual a ${TotalDivInt}`);
console.log(ttotal);