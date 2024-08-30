/* const user = {name:"Carlos", password: "12345"};
const authentication = user.name === "carlos" && user.password === "12345";
console.log(authentication);

const age = 19
if ((age >= 18 ) && (age <=32)) {
  console.log("Apto ao concurso");
}else {
  console.log("Não apto ao concurso");
}
 */
const prompt = require("prompt-sync")();
/* 
Exercício 1: Verificar Número Par ou Ímpar
Descrição: Escreva um programa que solicite ao usuário um número e verifique se
ele é par ou ímpar.
const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite o numero: "));
(numero % 2 === 0) ? console.log("Par") : console.log("Ímpar");
*/

/* 
Exercício 2: Comparação de Três Números

Descrição: Escreva um programa que receba três números e determine qual é o maior.

let num1 = Number(prompt("Digite o primeiro numero: "));;
let num2 = Number(prompt("Digite o segundo numero: "));;
let num3 = Number(prompt("Digite o terceiro numero: "));;
if(num1 === num2 && num1 === num3){
  console.log("Os números são iguais");
}else if (num1 > num2 && num1 > num3) {
  console.log(num1+" é o maior número.");
}else if(num2 > num3){
  console.log(num2 +" é o maior número.");
}else{
  console.log(num3 +" é o maior número.");
}
*/


/* 
Exercício 3: Calculadora Simples

Descrição: Escreva um programa que implemente uma calculadora simples com 
operações de adição, subtração, multiplicação e divisão.


let number1 = Number(prompt("Digite o primeiro numero: "));
let number2 = Number(prompt("Digite o segundo numero: "));
let operador = prompt("Digite o operador: ");

if( operador === "+"){
  console.log(`${number1} + ${number2} = ${number1+number2}`);
}else if(operador === "-"){
  console.log(`${number1} - ${number2} = ${number1-number2}`);
}else if(operador === "*"){
  console.log(`${number1} * ${number2} = ${number1*number2}`);
}else if(operador === "/"){
  if (number1 === 0) {
    console.log("Não existe divisão por 0");
    return;
  }
  console.log(`${number1} / ${number2} = ${number1/number2}`);
}
*/

/* 
Exercício 1: Verifiquem o dia da semana com a estrutura switch-case


let weekday = Number(prompt("Digite o numero da semana: "))
switch (weekday) {
  case 1:
    console.log(`Domingo.`);
    break;
  case 2:
    console.log(`Segunda-feira.`);
    break;
  case 3:
    console.log(`Terça-feira.`);
    break;
  case 4:
    console.log(`Quarta-feira.`);
    break;
  case 5:
    console.log(`Quinta-feira.`);
    break;
  case 6:
    console.log(`Sexta-feira.`);
    break;
  case 7:
    console.log(`Sábado.`);
    break;
  default:
    console.log("Dia da semana inválido.");
    break;
}
*/

/* 
Exercício 2: Calcular o número de dias em um mês.
- Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
- Os meses 4, 6, 9 e 11 tem 30 dias 
- Mês 2 tem 28 dias

let month = Number(prompt("Digite o numero do mês: "))
switch (month) {
  case 1:case 3: case 5: case 7: case 8: case 10: case 12:
    console.log(`O mês ${month} tem 31 dias.`);
    break;
  case 4: case 6: case 9: case 11:
    console.log(`O mês ${month} tem 30 dias.`);
    break;
  case 2:
    console.log(`O mês ${month} tem 28 dias.`);
    break;
  default:
    console.log("Mês inválido.");
    break;
}
*/       