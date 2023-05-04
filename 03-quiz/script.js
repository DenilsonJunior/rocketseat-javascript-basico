let alternative = document.querySelectorAll('.alt')
let qtdAlt = alternative.length

// Seleciona apenas uma das alternativas

for (let i = 0; i < qtdAlt; i++) {

    alternative[i].onclick = function(event) {

        for (let j = 0; j < qtdAlt; j++) {
            alternative[j].classList.remove('selected');
        }

        event.target.classList.add('selected')

        console.log(alternative[i])
    }
    
}


// Seleciona uma ou mais alternativas
/*
for (let i = 0; i < qtdAlt; i++) {

    alternative[i].onclick = function() {

        alternative[i].classList.toggle('selected');

        console.log(alternative[i])
    }
    
}
*/