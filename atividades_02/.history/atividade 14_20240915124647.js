/*
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/
let enterprise = {
  name: "KiauTech",
  departments: [
    {departmentName: "Suporte Técnico", listOfEmployees: ["Ana", "Rafael", "Camila"]},
    {departmentName: "Desenvolvimento", listOfEmployees: ["Carlos", "Maria", "João"]},
    {departmentName: "Recursos Humanos", listOfEmployees: ["Paula", "Fernanda", "Lucas"]},
  ]
};

function getDepartment() {
  for (const index in enterprise) {
    for (const department of enterprise[index]) {
      for (const employee of department.listOfEmployees) {
        console.log(`${employee} do departamento de: ${department.departmentName}`);
      }
    }
  }
}

getDepartment();
