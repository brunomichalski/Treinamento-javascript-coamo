/**
 * Escreva um programa que lê dois números naturais e informa o maior. O programa também deve informar se os números são iguais.
 * Caso o utilizador entre com algum número negativo, o programa deve informar um erro e não realizar as demais verificações. 
 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let n1 = prompt("Informe um Numero .:");
let n2 = prompt("Informe outro Numero .:");

if ((n1 >= 0 ) && (n2 >= 0)) {

    if (n1 > n2) {
        console.log(n1, " é maior!");
    }else{
        console.log(n2, " é maior!");
    }

    if (n1 == n2) {
        console.log("Números iguais");
    }

}else{
    console.log("ERRO | número negativo");
}