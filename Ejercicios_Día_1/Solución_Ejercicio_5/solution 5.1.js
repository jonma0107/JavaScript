function bmi(peso, altura){
  indice = peso / (Math.pow(parseFloat(altura), 2))
  return indice
}
let w = prompt("Digite su peso corporal : ");
let h = parseFloat(prompt("Digite su estatura: "));
alert("Tu BMI es: "+bmi(w, h));
console.log("Tu BMI es: "+bmi(w, h));
