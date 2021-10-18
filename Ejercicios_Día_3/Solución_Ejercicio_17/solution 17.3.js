const numAleatorio = Math.ceil(Math.random() * 10);
let numUsuario = parseInt(prompt('Intenta adivinar el numero, el rango es de 1-10'));
while(numUsuario != numAleatorio){
    console.log('Lo siento ese no era el numero, intenta nuevamente');
    numUsuario = parseInt(prompt('Intenta adivinar el numero, el rango es de 1-10'));
}
console.log(`Felicitaciones, el numero era ${numAleatorio}`)