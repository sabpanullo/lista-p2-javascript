function criptografar(frase) {
    let pares = "";
    let impares = "";

    for (let i = 0; i < frase.length; i++) {
        if (i % 2 === 0) pares += frase[i];
        else impares += frase[i];
    }

    // inverter
    pares = pares.split("").reverse().join("");
    impares = impares.split("").reverse().join("");

    return { pares, impares };
}

// teste
console.log(criptografar("exemplo de frase"));
