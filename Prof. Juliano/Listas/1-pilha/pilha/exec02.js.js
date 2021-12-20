function casa_delimitadores(expressao) {
    let p_abres = []

    for (let letra of expressao) {//[(())]
        if (letra > 0 || letra < 9 || letra == '+' || letra == '-' || letra == '/' || letra == '*') {
            p_abres.push("");
        }
        if ((letra == '(') || (letra == '[') || (letra == '{')) {
            p_abres.push(letra)
        }
        else {
            // letra é ), ], }.
            let x = p_abres.pop()
            if (x == undefined) { // "fecha" sobrando pq a pilha estava vazia
                return false;
            }
            if ((letra == ")") && (x != "("))
                return false;
            if ((letra == "]") && (x != "["))
                return false;
            if ((letra == "}") && (x != "{"))
                return false;
        }
    }

    if (p_abres.length > 0) {
        return false;
    }

    return true;
}

console.log(casa_delimitadores("[(2+(3*4))*3]"))