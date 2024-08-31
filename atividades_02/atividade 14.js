/*
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/
let enterprise = {
  departments: [
    {name: "Empacotamento", list: ["Igor", "Arthur"]},
    {name: "Segurança", list: ["Rafael", "Carlos"]},
  ]
};

function getDepartment() {
  for (const index in enterprise) {
    for (const department of enterprise[index]) {
      for (const i in department) {
        if(typeof(department[i]) === "object") console.log(department[i].join(', '));
        if(typeof(department[i]) !== "object") console.log(department[i]);
      }
    }    
  }

}

/* function getDepartment() {
  for (const index in enterprise) {
    enterprise[index].forEach(element => {
      console.log(element);
      
    });
  } */

let department = getDepartment();
console.log(department);






