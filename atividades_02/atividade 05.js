let alunos = [
  {name: "Naruto", grade1: 2.1, grade2: 3.5},
  {name: "Pegazos", grade1: 8.1, grade2: 9},
  {name: "Goku", grade1: 4.5, grade2: 5},
  {name: "Nezuko", grade1: 6.3, grade2: 7.5},
  {name: "Escanor", grade1: 100, grade2: 100},
]
for (const aluno of alunos) {
  let average = (aluno.grade1 + aluno.grade2) / 2
  console.log(`Aluno: ${aluno.name}, nota 1: ${aluno.grade1.toFixed(2)}, nota 2: ${aluno.grade2.toFixed(2)}. Media do aluno: ${average.toFixed(2)}`);
}