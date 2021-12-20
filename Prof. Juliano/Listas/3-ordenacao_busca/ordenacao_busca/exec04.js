/**
 * Quando um vetor está ordenado, é possível usar um algoritmo de busca, chamado de Busca Binária,
 * para encontrar qualquer elemento muito rapidamente. O algoritmo é descrito a seguir.
    Este algoritmo retorna a posição que o elemento x ocupa no vetor v.
    Caso o elemento x não esteja no vetor, retorna -1.
    Este algoritmo considera que o vetor v está ordenado e que o vetor v começa na posição 0.

 */
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

let  v = [ 21, 30, 27, 43];

let res = busca_binaria(v, 30);
console.log(res);