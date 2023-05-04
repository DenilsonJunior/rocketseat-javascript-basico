/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os 
    parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova
    de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Digite o seu nome')

let noteOne = prompt('Digite sua primeira nota');
let noteTwo = prompt('Digite sua segunda nota');
let noteTree = prompt('Digite sua terceira nota');

let average = ( Number(noteOne) + Number(noteTwo) + Number(noteTree) ) / 3;
average = average.toFixed(2)

if ( average < 3 ) {
    alert( student + ' sua média foi ' + average + ' você está Reprovado!' );
} else if ( average >= 3 && average < 6 ) {
    alert( 'Não foi desta vez ' + student + ' sua média foi de ' + average + ' vamos tentar novamente?' )
} else {
    alert( 'Parabéns ' + student + ' sua média foi de ' + average );
}

/*
    // Resposta do professor
    let student = prompt("Qual o nome do(a) aluno(a)?")
    let n1 = prompt("Qual a nota da primeira prova?")
    let n2 = prompt("Qual a nota da segunda prova?")
    let n3 = prompt("Qual a nota da terceira prova?")

    let average = (Number(n1) + Number(n2) + Number(n3)) / 3

    let result = average > 6

    average = average.toFixed(2)

    if (result) {
        alert("Parabéns, " + student + "! Sua média foi de: " + average)
    } else if (average < 3) {
        alert("Reprovado")
    } else {
        alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
    }
*/