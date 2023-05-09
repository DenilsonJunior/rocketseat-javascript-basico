/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/


let opDesejada;
let listaItem = [];

while ( opDesejada != 3) {
    opDesejada = Number(prompt(`
        Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    `));

    switch (opDesejada) {
        case 1:
            let cadastreItem = prompt('Cadastrar um item na lista');
            listaItem.push(cadastreItem);
            break;

        case 2:
            if( listaItem.length == 0 ) {
                alert('Ainda não existe item cadastrado')
            } else{
                console.log(listaItem);
            }
            break;

        case 3:
            console.log('Fim!');
            break;
    
        default:
            alert('Opção invalida!')
            break;
    }
}
