let numberOne = Number(prompt('Digite o primeiro número'));
let numberTwo = Number(prompt('Digite o segundo número'));
let sum = (numberOne + numberTwo) % 2;

alert(`A soma dos dois números é ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois número é ${numberOne % numberTwo}`)

if (numberOne != numberTwo) {
    alert('Os números são diferentes!')
} else {
    alert('Os números são iguais!')
}

if(sum == 0) {
    alert('A soma dos valores é Par!')
} else {
    alert('A soma dos valores é impár')
}