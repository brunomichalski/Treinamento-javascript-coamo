function palindromo(palavra) {
    let p = [] // pilha

    //Tira os espaços e acentos
    const str = palavra;
    const pala = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

    for (let letra of pala) {
        if (letra == " ") {
            p.push('');
        } else {
            p.push(letra)
        }
    }

    for (let letra of pala) {
        let x = p.pop()
        if (letra != x) {
            return false
        }
    }

    return true

}

console.log(palindromo("a sacada da casa")) // a sacada da casa


