let numberOne = prompt('Digite o primeiro número');
let operational = prompt('Digite o operacional podendo ser +, -, *, / ou %.');
let numberTwo = prompt('Digite o segundo número');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

switch (operational) {
    case '+':
        result = numberOne + numberTwo
        alert(result)
        break;
    case '-':
        result = numberOne - numberTwo
        alert(result)
        break;
    case '*':
        result = numberOne * numberTwo
        alert(result)
        break;
    case '/':
        result = numberOne / numberTwo
        alert(result)
        break;
    case '%':
        result = numberOne % numberTwo
        alert(result)
        break;
    default:
        alert('Operador invalido')
}