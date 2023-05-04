let num = 1;

for (num; num <= 10; num++) {
    console.log('tabuada do ' + num)
    
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(num + ' x ' + multiplicador + ' = ' + num * multiplicador)
    }
}