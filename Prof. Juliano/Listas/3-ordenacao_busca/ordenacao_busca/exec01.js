/**
 * Implemente a função ordenar_strings_acentos_mixed_case(v) que ordena o 
 * vetor de strings v em ordem alfabética desconsiderando diferenças entre maiúsculas e minúsculas e acentos.
 *  Por exemplo, ordenar_strings_acentos_mixed_case
 * ([‘abóbora’, ‘abacaxi’, ‘Mamão’, ‘açaí’, ‘Acerola’, ‘tangerina’, ‘Tâmara’, ‘tAmarindo’]) 
 * deve retornar [‘abacaxi’, ‘abóbora’, ‘açaí’, ‘Acerola’, ‘Tâmara’, ‘tAmarindo’, ‘tangerina’] 
 */

let v = ['abóbora', 'abacaxi', 'Mamão', 'açaí', 'Acerola', 'tangerina', 'Tâmara', 'tAmarindo'];
function ondenar_string_acentos_mixed_case(v) {
    function comp_strings_mixed_case(a, b){
        let a_maiuscula = a.toUpperCase()
        let b_maiuscula = b.toUpperCase()
        if(a_maiuscula < b_maiuscula)
            return -1;
        if(a_maiuscula > b_maiuscula)
            return 1;
        return 0;
    }

    v.sort(comp_strings_mixed_case)
    return v
}

ondenar_string_acentos_mixed_case(v)
v.sort((a, b) => a.localeCompare(b))
console.log(v)
