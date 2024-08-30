const prompt = require("prompt-sync")()
/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de 
uma pessoa e determina a categoria de peso (baixo peso, peso normal, 
sobrepeso, obesidade) utilizando if-else. 
*/
const weight = Number(prompt('Digite seu peso: '));
const height = Number(prompt('Digite sua altura: '));

function imc(weight, height) {
  const calculatorImc = weight / (height*height)
  if(calculatorImc < 18.5){
    return `IMC: ${calculatorImc} - Baixo peso`;
  }else if(calculatorImc > 18.5 && calculatorImc < 24.9){
    return `IMC: ${calculatorImc} - Peso adequado`;
  }else if(calculatorImc >= 25 && calculatorImc < 29.9){
    return `IMC: ${calculatorImc} - Sobrepeso`;
  }else if(calculatorImc > 30 && calculatorImc < 34.9){
    return `IMC: ${calculatorImc} - Obesidade grau `;
  }else if(calculatorImc > 35 && calculatorImc < 39.9){
    return `IMC: ${calculatorImc} - Obesidade grau 2`;
  }else if(calculatorImc > 40){
    return `IMC: ${calculatorImc} - Obesidade extrema`;
  }
}

console.log(imc(weight, height));