while(true){
  let num = parseInt(prompt("ingrese un número del 0 al 10"));
  const random = Math.floor((Math.random()*10));
  if(num===random){
    console.log("Has Adivinado!");
    break;
  } else {
    console.log("intentalo nuevamente. El número era: "+random);
  }
}