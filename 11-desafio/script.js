let students = [
    {
        nome: 'Denilson',
        nota1: 8,
        nota2: 7
    },
    {
        nome: 'Carlos',
        nota1: 6,
        nota2: 3
    }
]

function somar(students){
    return (students.nota1 + students.nota2) / 2
}

for (let i = 0; i < students.length; i++) {
    let average = somar(students[i]);
    if(average < 7){
        alert(`O aluno ${students[i].nome} ficou com a média: ${average} e está Reprovado!`)
    } else {
        alert(`O aluno ${students[i].nome} ficou com a média: ${average} e está Aprovado!`)
    }
}
