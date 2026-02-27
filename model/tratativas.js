/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável de armazenar as tratativas de erros para o cálculo do IMC
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
// Função para validar os dados de entrada

const validarEntrada = function(nome, peso, altura){
    let nomePaciente = String(nome).charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
    let pesoPaciente = Number(String(peso).replace(',', '.'))
    let alturaPaciente = Number(String(altura).replace(',', '.'))

    if (nomePaciente == '' || !isNaN(nomePaciente)) {
        return 'ERRO: Nome inválido. Digite um nome válido.';
    }
    
    if (isNaN(pesoPaciente) || isNaN(alturaPaciente) || pesoPaciente <= 0 || alturaPaciente <= 0) {
        return 'ERRO: Peso e Altura precisam ser números válidos maiores que zero.';
    }

    return true
}

module.exports = {
    validarEntrada
}