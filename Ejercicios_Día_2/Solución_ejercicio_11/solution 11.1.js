//Este programa pide un número al usuario y verifica si son multiplo de 3 o de 5 mostrando mensaje por consola.
const number1 = parseInt(prompt("Ingrese un número mayor a 0: "));
if ((number1 % 3) === 0 && (number1 % 5) === 0) console.log("bingbong.");
else if (!(number1 % 3)) console.log("bing.");
else if (!(number1 % 5)) console.log("bong.");
else console.log(number1);