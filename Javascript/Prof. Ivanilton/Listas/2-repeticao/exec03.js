/**
 * Escreva um programa que calcule a diferença entre a soma dos quadrados e o quadrado da
soma dos primeiros N números naturais . O valor N deve ser lido pelo terminal. Vejo o exemplo:
A soma dos quadrados dos 10 primeiros números naturais é:
1² + 2² + … + 10² = 385
O quadrado da soma dos 10 primeiros números naturais é:
(1 + 2 + ... + 10)² = 55² = 3025
A diferença entre ambos é 3025 - 385 = 2640     
 */

const prompt = require("prompt-sync")();

let n = Number(prompt("Infome um número natural: "));
let res = 0;
let soma = 0;
for (let i = 1; i <= n; i++) {
    res += i**2;
    soma += i;
}

total = (soma**2) - res;

console.log("A diferença entre ambos é: "+ total);