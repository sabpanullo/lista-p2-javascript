function descriptografar(pares, impares) {
    // desfazer a inversão
    pares = pares.split("").reverse().join("");
    impares = impares.split("").reverse().join("");

    let resultado = "";
    let iPar = 0, iImpar = 0;

    for (let i = 0; i < pares.length + impares.length; i++) {
        if (i % 2 === 0) {
            resultado += pares[iPar++];
        } else {
            resultado += impares[iImpar++];
        }
    }

    return resultado;
}

// teste
const cript = criptografar("exemplo de frase");
console.log(descriptografar(cript.pares, cript.impares));
