/**
*Suponha que temos um vetor v de números. 
Implemente a função elementos_sozinhos(v) que retorne um novo vetor contendo apenas os
elementos do vetor v que são sozinhos, ou seja, que sejam os únicos com seus respectivos valores.
O vetor retornado deve estar em ordem crescente. Os elementos de v podem mudar de ordem,
mas nenhum elemento deve ser removido dele. 
Por exemplo, para o vetor v = [1, 9, 0, 1, 9, 10, 2, 5], a função 
elementos_sozinhos(v) retorna [0, 2, 5, 10]. 
 */

"use strict";

function elementos_sozinhos(v) {
    v.sort((a,b) => a - b)
    let v1 = v;
    let cont = 0;
    let saida = [];
    for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < v1.length; j++) {
            if (v[i] == v1[j]) {
                cont++;
            }
        }
        if(cont < 2 && cont == 1){
            saida.push(v[i]);
        }
        cont = 0;
    }
    return saida;
}

let v = [1, 9, 0, 1, 9, 10, 2, 5]
let x = elementos_sozinhos(v)
console.log(x)