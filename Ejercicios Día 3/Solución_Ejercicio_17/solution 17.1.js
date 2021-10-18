let number = parseInt(prompt("Por favor ingresa un numero"));
let random = Math.round(Math.random() * 10)

while (number != random) {
    alert(`Intentalo de nuevo `);
    number = parseInt(prompt("Por favor ingresa un numero nuevamente"));
}
console.log("Felicitaciones el numero era el ", random);