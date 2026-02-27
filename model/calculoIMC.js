/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável de armazenar as funções para o cálculo do IMC 
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

// Função para calcular o IMC
const calcularIMC = function(peso, altura){
    let pesoPaciente = Number(String(peso).replace(',', '.'))
    let alturaPaciente = Number(String(altura).replace(',', '.'))
    imc = pesoPaciente / (alturaPaciente * alturaPaciente)
    let situacao = ''

    if(imc < 18.5){
        return{
            valorIMC: imc.toFixed(2),
            status: situacao = 'Abaixo do peso'
        }
    }else if(imc >= 18.5 && imc < 25){
        return{
            valorIMC: imc.toFixed(2),
            status: situacao = 'Peso normal'
        }
    }else if(imc >= 25 && imc < 30){
        return {
            valorIMC: imc.toFixed(2),
            status: situacao = 'Acima do peso'
        }
    }else if(imc >= 30 && imc < 35){
        return {
            valorIMC: imc.toFixed(2),
            status: situacao = 'Obesidade grau 1'
        }
    }else if(imc >= 35 && imc < 40){
        return {
            valorIMC: imc.toFixed(2),
            status: situacao = 'Obesidade grau 2'
        }
    }else if(imc >= 40){
        return {
            valorIMC: imc.toFixed(2),
            status: situacao = 'Obesidade grau 3'
        }
    }else {
        return console.log('Valor inválido')
    }
    
}

module.exports = {
    calcularIMC
}