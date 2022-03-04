/**
 * Escreva um programa que lê um número de 0 a 9 e o imprime por extenso.
 * O programa deve validar a entrada (0 ≤ x ≤ 9) e informar erro, caso ocorra. 
 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let x = prompt("Informe um Numero .:");

if (x == 0) {
    console.log("ZERO");
} else if (x == 1) {
    console.log("UM");
} else if (x == 2) {
    console.log("DOIS");
} else if (x == 3) {
    console.log("TRES");
} else if (x == 4) {
    console.log("QUATRO");
} else if (x == 5) {
    console.log("CINCO");
} else if (x == 6) {
    console.log("SEIS");
} else if (x == 7) {
    console.log("SETE");
} else if (x == 8) {
    console.log("OITO");
} else if (x == 9) {
    console.log("NOVE");
} else {
    console.log("Número incorreto");
}