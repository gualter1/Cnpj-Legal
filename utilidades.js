const caracteres = [
    "á", "à", "â", "ã", "ä", "é", "è", "ê", "ë", "í", "ì", "î", "ï", "ó", "ò", "ô", "õ", "ö",
    "ú", "ù", "û", "ü", "ç", "ñ", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", 
    "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\n", "%" 
];

const codigos = [
    "%C3%A1", "%C3%A0", "%C3%A2", "%C3%A3", "%C3%A4", "%C3%A9", "%C3%A8", "%C3%AA", "%C3%AB","%C3%AD", "%C3%AC", 
    "%C3%AE", "%C3%AF", "%C3%B3", "%C3%B2", "%C3%B4", "%C3%B5", "%C3%B6", "%C3%BA", "%C3%B9", "%C3%BB", "%C3%BC", 
    "%C3%A7", "%C3%B1", "%20", "%21", "%22", "%23", "%24", "%25", "%26", "%27", "%28", "%29", "%2A", "%2B", "%2C", 
    "%2D", "%2E", "%2F", "%3A", "%3B", "%3C", "%3D", "%3E", "%3F", "%40", "%0A", "%25" 
];
  
function converteTexto (texto){
    let textoCortado = texto.split('')

    for (let i = 0; i < textoCortado.length; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (textoCortado[i] === caracteres[j]) {
                textoCortado[i] = codigos[j]
            }           
        }
    }
    let textonovo = textoCortado.join('')
    return textonovo
}

function converteCnpj(numeroCnpj){
    let numeroCnpjcortado = numeroCnpj.split('')
    
    let valor1 = numeroCnpjcortado[0] + numeroCnpjcortado[1]
    let valor2 = numeroCnpjcortado[2] + numeroCnpjcortado[3]+ numeroCnpjcortado[4]
    let valor3 = numeroCnpjcortado[5] + numeroCnpjcortado[6]+ numeroCnpjcortado[7]
    let valor4 = numeroCnpjcortado[8] + numeroCnpjcortado[9]+ numeroCnpjcortado[10]+ numeroCnpjcortado[11]
    let valor5 = numeroCnpjcortado[12] + numeroCnpjcortado[13]
    
    let numeroCnpjatt = `${valor1}.${valor2}.${valor3}/${valor4}-${valor5}` 
    
    return numeroCnpjatt
}

export { converteTexto, converteCnpj }

