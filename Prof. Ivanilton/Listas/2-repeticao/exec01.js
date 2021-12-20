/**
 * Dados dois números naturais M e N, escreva um programa que exibe um retângulo formado por
caracteres ‘X’ intercalados com ‘-’, tendo M caracteres de altura e N caracteres ‘X’ de largura. As
linhas devem estar contidas entre colchetes.
Exemplo: M = 3 e N = 9
[X-X-X-X-X-X-X-X-X]
[X-X-X-X-X-X-X-X-X]
[X-X-X-X-X-X-X-X-X]
 */

const prompt = require("prompt-sync")();

let linha = Number(prompt("Informe o número de linhas: "));
let coluna = Number(prompt("Informe o número de colunas: "));
let first;
for (let i = 0; i < linha ; i++) {
    
    for (let j = 0; j < coluna; j++) {
        if (j == 0) {
            first = "[X";
        }else if(j == coluna-1){
            first += "-X]"
        }else{
            first += "-X"
        }

    }
    console.log(first);
}