const fs = require('fs');
const path = require('path');

function imprimir_arquivos_largura_foreach(pasta_raiz) {
    f_pastas = [pasta_raiz];
    while (f_pastas.length > 0) {
        let pasta_atual = f_pastas.shift();
        console.log(pasta_atual);
        const arquivos_e_pastas = fs.readdirSync(pasta_atual);

        arquivos_e_pastas.forEach((arquivo_ou_pasta) => {
            let caminho = path.join(pasta_atual, arquivo_ou_pasta);
            const stats = fs.statSync(caminho);
            if (stats.isFile()) {
                console.log(caminho);
            }
            else {
                f_pastas.push(caminho);
            }
        })
    }
}

imprimir_arquivos_largura_foreach("raiz");
