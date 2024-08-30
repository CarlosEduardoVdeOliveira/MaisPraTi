const prompt = require("prompt-sync")()
/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. 
*/
const grade = Number(prompt("Digite a nota do aluno: "));
const checkStudentGradeStatus = (grade) => {
  if (grade < 0 || grade > 10) {
    return "Nota inválida. Insira uma nota entre 0 e 10."
  }
  if (grade >= 7) {
    return `Sua nota é: ${grade}, status: Aprovado`;
  }else if (grade >= 5 && grade < 7) {
    return `Sua nota é: ${grade}, status: Recuperação`;
  }else {
    return `Sua nota é: ${grade}, status: Reprovado`;
  }
}
if (isNaN(grade)) {
  console.error("Por favor, insira uma nota valida.");
}else{
  console.log(checkStudentGradeStatus(grade));
}