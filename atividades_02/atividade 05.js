/*
5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
  {name: "Naruto", grade1: 2.1, grade2: 3.5},
  {name: "Pegazos", grade1: 8.1, grade2: 9},
  {name: "Goku", grade1: 4.5, grade2: 5},
  {name: "Nezuku", grade1: 6.3, grade2: 7.5},
  {name: "Escanor", grade1: 10, grade2: 10},
]
for (const aluno of alunos) {
  let media = (aluno.grade1 + aluno.grade2) / 2
  console.log(`Aluno: ${aluno.name}, nota 1: ${aluno.grade1.toFixed(2)}, nota 2: ${aluno.grade2.toFixed(2)}. Media do aluno: ${media.toFixed(2)}`);
}