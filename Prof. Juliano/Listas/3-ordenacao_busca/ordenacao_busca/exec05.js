/**
 * Altere o código da função buscar_anagramas estudada na aula para usar a 
 * busca binária implementada no exercício anterior. Altere o algoritmo da busca binária conforme necessário. 
DICA: Não há garantia que a busca binária, 
conforme apresentada no exercício anterior, 
retorne a posição do primeiro elemento quando há repetições. 
Considere isto.

*/

function ordenar_palavra(palavra){
    palavra = palavra.split("")
    palavra.sort()
    palavra = palavra.join("")
    return palavra
}

function criar_dicionario_anagramas(palavras){
    d = []
    for(palavra of palavras){
        d.push({
            orig : palavra,
            ord : ordenar_palavra(palavra)
        })
    }
    d.sort((a, b) => a.ord.localeCompare(b.ord) )
    return d
}

function buscar_anagramas(palavra, dic){
    let palavra_ord = ordenar_palavra(palavra)
    let pos_primeiro_anagrama = dic.findIndex((p) => p.ord == palavra_ord)
    if(pos_primeiro_anagrama >= 0){
        let anagramas = []
        let i = pos_primeiro_anagrama
        while(dicionario[i] && dicionario[i].ord == palavra_ord){
            anagramas.push(dicionario[i].orig)
            i++
        }
        return anagramas
    }
    return []
}

function busca_binaria(v, x) {
    let e = 0;
    let d = (v.length)-1;
    while (e <= d) {
        let m = parseInt(((e + d)/2));
        if (x == v[m]) {
            return m;
        }
        if (x < v[m]) {
            d = m - 1;
        }else{
            e = m + 1;
        }

    }
    return -1;
}

let palavras = ['cabelo', 'cebola', 'amor',  
                'roma', 'algoritmo', 'logaritmo', 
                'oram', 'mora', 'dorme', 'morde',
                'ordem', 'roam']

dicionario = criar_dicionario_anagramas(palavras)

let anagrama = buscar_anagramas("algoritmo", dicionario);
let res = busca_binaria(anagrama[1], "l");
console.log(res);