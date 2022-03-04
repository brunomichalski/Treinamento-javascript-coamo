/**
 * Altere o Exemplo 1 da aula para que desconsidere a diferença entre maiúsculas e minúsculas 
 * se o tipo de a e b for string. Considere que o tipo de todos os elementos de ambos vetores são os mesmos.
 *  Ainda no caso que ambos vetores contenham strings, retorne todas as strings em letras minúsculas.
 *  Caso os tipos sejam outros, a função deve continuar se comportando normalmente como no exemplo feito na aula. 
Considere o exemplo: seja a = ['Banana', 'maçã', ‘TOmate'] e 
b = ['banana', 'tomate']. A função intersecao(a,b) deve retornar ['banana', 'tomate'].

 */

"use strict";

function remover_pontuacao(string) {
    string = string.replace("ã", "a")
    return string
}


function intersecao(a, b) {
    let vetA_min = [], vetB_min = [];
    for (let i = 0; i < a.length; i++) {
        vetA_min[i] = remover_pontuacao(a[i].toLowerCase());
    }
    for (let i = 0; i < b.length; i++) {
        vetB_min[i] = remover_pontuacao(b[i].toLowerCase());
    }

    console.log(vetA_min)
    console.log(vetB_min)
    let set_a = new Set(vetA_min)
    let saida = new Set()
    for (let el of vetB_min) {
        if (set_a.has(el)) {
            saida.add(el)
        }
    }
    return saida
}

let a = ['banana', 'maçã', 'TOmate']
let b = ['Banana', 'tomate']

let set_inter = intersecao(a, b)
let arr_inter = Array.from(set_inter)

console.log(arr_inter)