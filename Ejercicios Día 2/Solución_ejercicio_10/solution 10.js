let weight = parseFloat(prompt("Favor ingrese su peso corporal"));
let height = parseFloat(prompt("Por favor ingrese su altura"));
let resultado = weight/height**2;
let bmi = resultado.toFixed(2);

if (bmi<18.5){
	console.log("Bajo de peso. Su BMI es: "+bmi);
} else if (bmi>18.5 && bmi<=24.9) {
	console.log("Normal. Su BMI es: "+bmi);
} else if (bmi>25 && bmi<=29.9) {
	console.log("Sobrepeso. Su BMI es: "+bmi);
} else if (bmi>30) {
	console.log("Obeso. Su BMI es: "+bmi);
} else {
	console.log("Digite un valor válido");
}