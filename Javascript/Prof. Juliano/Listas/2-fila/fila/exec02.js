const fs = require('fs');
const path = require('path');

function imprimir_arquivos_largura_foreach(pasta_raiz) {
    f_pastas = [pasta_raiz];

    while (f_pastas.length > 0) {
        let pasta = f_pastas.pop();
        const arquivos = fs.readdirSync(pasta);

        arquivos.reverse().forEach((arquivo) => {
            let caminho = path.join(pasta, arquivo);
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
