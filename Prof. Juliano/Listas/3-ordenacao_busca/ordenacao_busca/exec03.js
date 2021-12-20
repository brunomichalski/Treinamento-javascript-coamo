/**
 * Implemente a função uniao(v1, v2) que, dados dois vetores de números, 
 * v1 e v2, retorne os elementos que estão em v1 ou em v2, mas sem repetições. 
 * Por exemplo, se v1 = [1, 2, 3, 4] e v2 = [3, 4, 5, 6], a função retorna [1, 2, 3, 4, 5, 6]. 
 */

function uniao(v1, v2) {
    v1.sort((a,b) => a - b);
    v2.sort((a,b) => a - b);
    let saida = [];
    let res = [];
    for(let dir = 0; dir < v1.length; dir++){
        if(v1[dir] != v1[dir-1]){
            saida.push(v1[dir])
        }
    }
    for(let dir = 0; dir < v2.length; dir++){
        if(v2[dir] != v2[dir-1]){
            saida.push(v2[dir])
        }
    }

    saida.sort((a,b) => a - b);
    for(let dir = 0; dir < saida.length; dir++){
        if(saida[dir] != saida[dir+1]){
            res.push(saida[dir])
        }
    }
    return res
}

let v1 = [1, 2, 3, 4];
let v2 = [3, 4, 5, 6];

let res = uniao(v1, v2);
console.log(res);