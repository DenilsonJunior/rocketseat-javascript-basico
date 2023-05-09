/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

    Escreva uma lista contendo o nome dos pacientes, suas idades, altura e peso
    Ex: nome tem x anos, x de altura e pesa xkgs.
*/

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
        peso: 72,
        altura: 1.76
    }
]

const nomePacientes = [];

/*
for (let i = 0; i < pacientes.length; i++) {
    nomePacientes.push(pacientes[i].nome)
}
*/

for (const paciente of pacientes) {
    nomePacientes.push(paciente.nome)
}

for (let i = 0; i < pacientes.length; i++) {
    console.log(`${pacientes[i].nome} tem ${pacientes[i].idade} anos, ${pacientes[i].altura} de altura e pesa ${pacientes[i].peso}kgs.`)
}

/*
for (const paciente of pacientes) {
    console.log(`${paciente.nome} tem ${paciente.idade} anos, ${paciente.altura} de altura e pesa ${paciente.peso}kgs.`)
}

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
    },
]
  
let patientsNames = []
  
for(let patient of patients) {
    patientsNames.push(patient.name)    
}
  
alert(patientsNames)
*/