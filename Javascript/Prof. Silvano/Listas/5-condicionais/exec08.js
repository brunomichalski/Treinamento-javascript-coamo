/**
 * Escreva uma função que recebe um número x e: 
 * a. Retorna true se x está dentro de um dos seguintes intervalos: [20..39] ou [60..79]; b. Em caso contrário, retorna false.
 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let x = prompt("Informe um Numero .:");

function retorna(x) {
    if (((x >= 20) && (x <= 39)) || (x >= 60) && (x <= 79)) {
        return true
    } else {
        return false
    }
}

let valor = retorna(x);

console.log(valor);
