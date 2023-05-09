/*
  Capture 10 items para compor a lista de um supermercado.
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let sacola = []
let qtdItens = Number(prompt('Quantos itens deseja inserir em sua lista?'))

for( let i = 1; i <= qtdItens; i++ ) {
    let item = prompt('Insira o item: ' + i )
    sacola.push(item)
}

alert(sacola.join(', '))

/*
    let items = [];

    for(let item = 0; item < 2; item++) {
        let itemName = prompt("Digite o item " + (item + 1))

        items[item] = itemName
    }

    alert(items)
*/
