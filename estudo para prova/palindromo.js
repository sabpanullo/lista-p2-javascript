function ehPalindromo(palavra) {
    const limpa = palavra.toLowerCase().replace(/[^a-zà-ú0-9]/g, "");
    const invertida = limpa.split("").reverse().join("");
    return limpa === invertida;
}

// testes
console.log(ehPalindromo("Mussum"));   // verdadeiro
console.log(ehPalindromo("Teste"));    // falso
console.log(ehPalindromo("Arara"));    // verdadeiro
