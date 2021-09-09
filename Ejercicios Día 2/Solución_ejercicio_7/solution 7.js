let num1=parseFloat(prompt("Ingrese un número"));
let min=1
let max=10
resultado= Math.floor(Math.random() * (max - min)) + min;
if (resultado===num1) {
	alert("Felicitaciones, ese era!");
	console.log("Felicitaciones, ese era!");
} else {
	alert("Lo siento, intenta nuevamente! El número era el: "+resultado);
	console.log("Lo siento, intenta nuevamente! El número era el: "+resultado);
}