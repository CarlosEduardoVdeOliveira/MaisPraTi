const prompt = require("prompt-sync")()

let sideAOfTheTriangle = Number(prompt("Digite o lado A do triângulo: "))
let sideBOfTheTriangle = Number(prompt("Digite o lado B do triângulo: "))
let sideCOfTheTriangle = Number(prompt("Digite o lado C do triângulo: "))

function isTriangle(sideA, sideB, sideC){
  return(
    sideA < (sideB + sideC) && 
    sideB < (sideA + sideC) && 
    sideC < (sideA + sideB)
  )
}
function checkTheTypeOfATriangle(sideA, sideB, sideC){
  let resultTypeTriangle = "";
  if ((sideA === sideB && sideA !== sideC) ||
      (sideA === sideC && sideB !== sideC) || 
      (sideB === sideC && sideB !== sideA)) {
    resultTypeTriangle = "Isósceles";
    return resultTypeTriangle;
  }else if(sideA !== sideB && sideB !== sideC){
    resultTypeTriangle = "Escaleno";
    return resultTypeTriangle;
  }else if (sideA === sideB && sideB === sideC) {
    resultTypeTriangle = "Equilátero";
    return resultTypeTriangle;
  }
}

if (!isTriangle(sideAOfTheTriangle, sideBOfTheTriangle, sideCOfTheTriangle)) {
  console.error("Os lados informados não formam um triângulo.");
}else{
  console.log(`O triângulo é: ${checkTheTypeOfATriangle(sideAOfTheTriangle, sideBOfTheTriangle, sideCOfTheTriangle)}`);
}