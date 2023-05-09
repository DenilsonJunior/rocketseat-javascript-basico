/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const pacientes = [
    {
        nome: 'Angêlo',
        idade: 18,
        peso: 70,
        altura: 1.78
    },
    {
        nome: 'Marcos',
        idade: 20,
        peso: 75,
        altura: 1.80
    },
    {
        nome: 'Lucas',
        idade: 33,
        peso: 100,
        altura: 1.90
    }
]

// calculo do IMC = peso / altura * altura;
calcImc();

function calcImc() {
    let pesos = []
    let alturas = []
    let imc = []

    for (const paciente of pacientes) {
        pesos.push(paciente.peso)
        alturas.push(paciente.altura)
    }
    
    for (let i = 0; i < pacientes.length; i++) {
        imc.push(`${(pesos[i] / (alturas[i] ** 2)).toFixed(2)}`)
    }

    console.log(imc)
}
