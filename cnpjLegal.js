import { converteCnpj, converteTexto } from "./utilidades.js"

function cortaTexto(nomes, cnpj, telefone) {
    let nomesCortado = nomes.replace(/\d+|\./gm, '').split('\n')
    let cnpjCortado = cnpj.split('\n')
    let telefoneCortado = telefone.split('\n')
    return { nomesCortado, cnpjCortado, telefoneCortado }
}

function montaMensagem(atendente, cliente, cnpj, telefone, mensagem) {
    let textoCortado = cortaTexto(cliente, cnpj, telefone)
    let listaCnpj = textoCortado.cnpjCortado
    let listaCliente = textoCortado.nomesCortado  
    let listaTelefones = textoCortado.telefoneCortado
    
    let textoWtpp =  ''
    for (let i = 0; i < listaCliente.length; i++) {
        
        let texto = `Olá *${listaCliente[i].trim()},* meu nome é ${atendente}, falo em nome da CNPJ Legal. Tudo bem?\n\nEsse contato é referente ao CNPJ *${converteCnpj(listaCnpj[i])}.*\n\n${mensagem}`
        textoWtpp += `https://wa.me/${listaTelefones[i]}?text=${converteTexto(texto)}\n`
    }
    return textoWtpp
}

function calcularSumula() {
    
    let atendente = document.getElementById("atendente").value
    let nomeDoCliente = document.getElementById("nomes-cliente").value
    let cnpjDoCliente = document.getElementById("cnpj-cliente").value
    let telefoneCliente = document.getElementById("telefone-cliente").value
    let textoMsg = document.getElementById("mensagem").value
    
    const mensagem = montaMensagem(atendente, nomeDoCliente, cnpjDoCliente, telefoneCliente, textoMsg)
    
    console.log(mensagem);
    
    
    localStorage.setItem("resultadoFinal", mensagem); // Salva o resultado
    localStorage.setItem("paginaOrigem", "cnpjLegal.html" );
    window.location.href = "resultado.html";
}

document.getElementById("botao-calcular").addEventListener("click", calcularSumula);






//console.log(textoWtpp, 'teste');
//console.log(telefoneCortado);
// console.log(listaCnpj);
// console.log(listaCliente);
// console.log(listaTelefones);
//console.log(texto)
//console.log(textoWtpp);
let textoConvertido = 'Identificamos%20que%20o%20seu%20CNPJ%20possui%20pend%C3%AAncias%20na%20Receita%20Federal.%20Essas%20pend%C3%AAncias%20podem%20gerar%20bloqueio%20de%20contas%20banc%C3%A1rias%20e%20inclus%C3%A3o%20no%20SPC%2FSerasa%2C%20colocando%20voc%C3%AA%20sob%20risco%20de%20execu%C3%A7%C3%A3o%20fiscal.%0A%0AA%20Receita%20Federal%20oferece%20a%20oportunidade%20de%20negocia%C3%A7%C3%A3o%20com%20at%C3%A9%2050%25%20de%20desconto%20e%20parcelamento%20em%20at%C3%A9%2060%20vezes.%0A%0A%E2%9E%9C%20Caso%20tenha%20interesse%20em%20receber%20um%20diagn%C3%B3stico%20completo%20e%20entender%20mais%20sobre%20a%20situa%C3%A7%C3%A3o%2C%20responda%20esta%20mensagem%20com%20SIM.%0A%0AConhe%C3%A7a%20o%20CNPJ%20Legal%20no%20Instagram%3A%20https%3A%2F%2Fwww.instagram.com%2Fp%2FDAGzpepRqGn%2F%0A%0ASe%20voc%C3%AA%20n%C3%A3o%20for%20respons%C3%A1vel%20pelo%20CNPJ%20citado%2C%20por%20favor%20nos%20informe.'
let textoMsga = `Identificamos que o seu CNPJ possui pendências na Receita Federal. Essas pendências podem gerar bloqueio de contas bancárias e inclusão no SPC/Serasa, colocando você sob risco de execução fiscal.

A Receita Federal oferece a oportunidade de negociação com até 50% de desconto e parcelamento em até 60 vezes.

➜ Caso tenha interesse em receber um diagnóstico completo e entender mais sobre a situação, responda esta mensagem com SIM.\n\nConheça o CNPJ Legal no Instagram: https://www.instagram.com/p/DAGzpepRqGn/

Se você não for responsável pelo CNPJ citado, por favor nos informe.`

// function cortaCnpj(cnpj) {
//     //console.log(cnpjCortado);
//     return cnpjCortado
// }

// function cortaNomes(texto) {
//     // console.log(textoCortado) 
//     return textoCortado
// }

// cortaNomes(nomeDoCliente)
// cortaCnpj(cnpjDoCliente)
// cortaTelefone(telefoneCliente)