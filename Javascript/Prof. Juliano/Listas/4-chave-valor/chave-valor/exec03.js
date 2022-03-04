/**
 * No Exercício 3 da aula implementamos uma função para contar a frequência de palavras em uma string.
 *  A função implementada no exercício retorna um Map, cuja chave é a palavra e o valor correspondente é o número de ocorrências da palavra.
 *  Implemente a função filtrar_palavras(freq, palavras),
 *  que recebe um Map retornado pela função contar_frequencia_palavras (do Exercício 3 da aula) 
 * e remove as chaves correspondentes às palavras do vetor palavras. 
 * Esta função deve retornar o mesmo Map, mas sem as chaves que foram removidas. 
 * 
Por exemplo: se o conteúdo do dicionário freq for {'de' => 8, 'que' => 6, 'algoritmo' => 5, 'e' => 4, 'a' => 3}
 e o conteúdo de palavras for ['de', 'que', 'e', 'a'] a função deve retornar o Map {'algoritmo' => 5}. 

 * 
 */

function remover_pontuacao(string) {
    string = string.replace("?", "")
    string = string.replace("!", "")
    string = string.replace(".", "")
    string = string.replace(",", "")
    string = string.replace("-", "")
    string = string.replace("\"", "")
    string = string.replace("\'", "")
    return string
}

function contar_frequencia_palavras(string) {
    let freq = new Map()
    string = remover_pontuacao(string)
    let palavras = string.split(" ")
    for (const palavra of palavras) {
        const p_minus = palavra.toLowerCase()
        const cont = freq.get(p_minus)
        if (cont == undefined) {
            freq.set(p_minus, 1)
        }
        else {
            freq.set(p_minus, cont + 1)
        }
    }
    return freq
    //console.log(freq);
}

function imprimir_freq_palavras(freq, vet) {
    let v = []
    for (const par of freq) {
        const [palavra, cont] = par
        if (!vet.includes(palavra) == true) {
            v.push({ palavra: palavra, contagem: cont })
        }
    }
    v = v.sort((a, b) => a['palavra'].localeCompare(b['palavra']))
    v = v.sort((a, b) => b['contagem'] - a['contagem'])
    console.log(v)
}

let s = "Um algoritmo não representa, necessariamente, um programa de computador, e sim os passos necessários para realizar uma tarefa. Sua implementação pode ser feita por um computador, por outro tipo de autômato ou mesmo por um ser humano. Diferentes algoritmos podem realizar a mesma tarefa usando um conjunto diferenciado de instruções em mais ou menos tempo, espaço ou esforço do que outros. Tal diferença pode ser reflexo da complexidade computacional aplicada, que depende de estruturas de dados adequadas ao algoritmo. Por exemplo, um algoritmo para se vestir pode especificar que você vista primeiro as meias e os sapatos antes de vestir a calça enquanto outro algoritmo especifica que você deve primeiro vestir a calça e depois as meias e os sapatos. Fica claro que o primeiro algoritmo é mais difícil de executar que o segundo apesar de ambos levarem ao mesmo resultado."

let freq = contar_frequencia_palavras(s)

let vet = ['de', 'que', 'e', 'a'];
imprimir_freq_palavras(freq, vet)