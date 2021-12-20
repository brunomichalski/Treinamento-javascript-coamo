/*
Escreva um programa que imprime a tabua
Informe um numero: 55 x 1 = 55 x 6 = 305 x 2 = 105 x 7 = 355 x 3 = 155 x 8 = 405 x 4 = 205 x 9 = 455 x 5 = 255 x 10= 50
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um número para saber sua tabuada: "));

let res;

console.log(`A multiplicação de ${num1} X 1 = `+ (res = num1 * 1));
console.log(`A multiplicação de ${num1} X 2 = `+ (res = num1 * 2));
console.log(`A multiplicação de ${num1} X 3 = `+ (res = num1 * 3));
console.log(`A multiplicação de ${num1} X 4 = `+ (res = num1 * 4));
console.log(`A multiplicação de ${num1} X 5 = `+ (res = num1 * 5));
console.log(`A multiplicação de ${num1} X 6 = `+ (res = num1 * 6));
console.log(`A multiplicação de ${num1} X 7 = `+ (res = num1 * 7));
console.log(`A multiplicação de ${num1} X 8 = `+ (res = num1 * 8));
console.log(`A multiplicação de ${num1} X 9 = `+ (res = num1 * 9));
console.log(`A multiplicação de ${num1} X 10 = `+ (res = num1 * 10));