/*
Escreva um programa que verifique e imprima na tela os números entre 100 e 250 que,
quando divididos por 11, produzem o resto igual a 5.
*/

function VeriNumeros() {
    for (let num = 100; num <= 250; num++) {
        if (num % 11 == 5) {
            console.log(num);
        }
    }
}

VeriNumeros();