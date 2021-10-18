const peso = parseFloat(prompt("Escriba su peso: "))
const altura = parseFloat(prompt("Escriba su altura: "))
const bmi = peso/altura**2
if(bmi<18.5) console.log("Bajo de peso")
	else if(bmi<24.9) console.log("Normal")
		else if(bmi>25 && bmi<29.9) console.log("Sobrepeso")
			else if(bmi>=30) console.log("Obeso!")