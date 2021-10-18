let num=parseInt(prompt("Favor ingrese un número"));

if (num%3==0 && num%5==0) {
	console.log("BingBong. Usted ingresó el número: "+num);
} else if (num%3==0) {
	console.log("Bing. Usted ingresó el número: "+num);
} else if (num%5==0) {
	console.log("Bong. Usted ingresó el número: "+num);
} else {
	console.log("No es multiplo de 3 ni de 5. Usted ingresó el número: "+num);
}