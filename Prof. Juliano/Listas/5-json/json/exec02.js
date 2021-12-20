'use strict'

let menu = {
    txGarcon: 0.1,
    massas : new Map([['Spaguetti', 30],
                    ['Nhoque', 25],
                    ['Lasenha',30]]),
    vinhos : new Map([['Colonial doce', 10],
                    ['Colonial tito', 11]])
}

let str = JSON.stringify(menu,
    function replacer(chave, valor) {
        if ((chave == 'massas') || (chave == 'vinhos')) {
            return Array.from(valor);
        }
        return valor;
    }
)
console.log(str);

let obj = JSON.parse(str,
    function reviver(chave, valor) {
        if ((chave == 'massas') || (chave == 'vinhos')){
            return new Map(valor);
        }
        return valor;
    }
)

console.log(obj);