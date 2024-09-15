const prompt = require("prompt-sync")()
const age = Number(prompt("Digite a idade para verificar se é criança, adolescente, adulto ou idoso: "));

function checkAgeRange(age) {
  let ageRange =""
  if (age < 0 || isNaN(age)) {
    return "Por favor, insira uma idade válida.";
  }
  if (age >= 0 && age <= 12) {
    ageRange = "Criança";
  }else if (age >= 13 && age <= 17) {
    ageRange = "Adolescente";
  }else if (age >= 18 && age <= 64) {
    ageRange = "Adulto";
  }else {
    ageRange = "Idoso"; 
  }
  return (`Sua idade é: ${age} e sua faixa etária é: ${ageRange}.`);
}
console.log(checkAgeRange(age));