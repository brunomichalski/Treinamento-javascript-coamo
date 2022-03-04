/**
 * Dois grupos de pessoas se encontraram em um churrasco para assistir um jogo de futebol.
 *  Suponha que você conheça os diferentes times que tenham pelo menos um torcedor em cada grupo.
 *  Faça uma função, diferenca_simetrica(a,b), 
 * que retorne apenas os times que tenham torcedores em apenas um dos grupos. 
Exemplo: Se a = ['Corinthians', 'Santos', 'Palmeiras', 'Coritiba'] e
 b = ['Corinthians', 'Londrina', 'Palmeiras', 'São Paulo'],
  então a função diferenca_simetrica(a,b) deve retornar ['Santos', 'Coritiba', 'Londrina', 'São Paulo'].

 */

  "use strict";

function intersecao(a, b){
    let set_a = new Set(a)
    let set_b = new Set(b)
    let saida = new Set()
    for(let el of a){
        if(!set_b.has(el)){
            saida.add(el)
        }
    }
    for(let el of b){
        if(!set_a.has(el)){
            saida.add(el)
        }
    }
    return saida
}

let cidades_joao = ['Corinthians', 'Santos', 'Palmeiras', 'Coritiba']
let cidades_maria = ['Corinthians', 'Londrina', 'Palmeiras', 'São Paulo']

let set_inter = intersecao(cidades_joao, cidades_maria)
let arr_inter = Array.from(set_inter)

console.log(arr_inter)