/* Escreva um programa que faz a leitura de três números e os informa em ordem crescente. Não
é permitido o uso das funções Math.max() e Math.min().
Exemplo:
Informe A: 5
Informe B: 3
Informe C: 14
NÚMEROS EM ORDEM: 3, 5, 14
*/
 
"use Strict"
const prompt = require('prompt-sync')({
    sigint: true
})
 
let a = Number(prompt('Informe A: '));
let b = Number(prompt('Informe B: '));
let c = Number(prompt('Informe C: '));
let maior
let menor
let medio
let total
 
if (a >= b && a >= c) {
    maior = a
} else if (b >= a && b >= c) {
    maior = b
} else {
    maior = c
}
 
if (a <= b && a <= c) {
    menor = a
} else if (b <= a && b <= c) {
    menor = b
} else {
    menor = c
}
 
medio = maior + menor;
total = a + b + c;
medio = total - medio;

console.log("Maior..:", maior)
console.log("Medio..:", medio)
console.log("Menor..:", menor)

