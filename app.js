/*******************************************************************************************************************************************
* Objetivo: Desenvolver uma aplicação para o cálculo do IMC 
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

// Import da biblioteca para entrada de dados
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do paciente: ', function (nome) {
    let nomePaciente = nome

    entradaDados.question('Digite o peso do paciente: ', function (peso) {
        let pesoPaciente = peso

        entradaDados.question('Digite a altura do paciente: ', function (altura) {
            let alturaPaciente = altura

            //Import do arquivo de tratativas de erros
            const tratativas = require('./model/tratativas')

            //Chamada da função para validar os dados de entrada
            let validacao = tratativas.validarEntrada(nomePaciente, pesoPaciente, alturaPaciente)
            
            if(validacao != true){
                console.log(validacao)
                entradaDados.close()
                return
            }

            //Import do arquivo de cálculo do IMC
            const calculoIMC = require('./model/calculoIMC')

            //Chamada da função para calcular o IMC
            let resultadoIMC = calculoIMC.calcularIMC(pesoPaciente, alturaPaciente)

            console.log(`O paciente ${nomePaciente} tem o IMC de ${resultadoIMC.valorIMC} e está ${resultadoIMC.status}`)
            entradaDados.close()
        })
    })
})

