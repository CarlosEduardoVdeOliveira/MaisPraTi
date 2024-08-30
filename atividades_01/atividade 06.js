const prompt = require("prompt-sync")()
/* 
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os 
lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado 
o tipo de triângulo: Isósceles, escaleno ou equilátero. Para verificar se 
os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
*/

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