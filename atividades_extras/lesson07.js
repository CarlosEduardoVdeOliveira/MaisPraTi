const prompt = require("prompt-sync")()
/* let multiplier = Number(prompt("Digite o numero: "))
for (let count = 0; count <= 10; count++) {
  console.log(`${multiplier} * ${count} = ${multiplier * count} `);
}
*/
/* let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("A soma de 1 até 100 é igual a: ", sum);

for (let j = 10; j >= 0; j--) {
  console.log(j);
} */
/* let i = 0;
let sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum); */

/* let num = Number(prompt("Digite um numero: "))
let sum = num;
let count = 0;
while(num !== 0){
  num = Number(prompt("Digite um numero: "));
  sum += num
  count++;
}
console.log(sum/count); */

// escrever os primeiro 50 números primos acima de 100
// 

let i = 0;
let counter = 0;
let primo = [];

for (let j = 1; j < 10; j++) {
  for (let i = 1; i < 10; i++) {
    if (i % j === 0) {
      counter++
      if (counter > 2) {
        primo.push(j);
        console.log(counter);
      }
    }
  }
}
console.log(primo);



while (i < 50) {
  
  i++;
}
//console.log(primo);

//Solicitar números ao usuário até que ele insira um valor negativo.
//let it = 0;

/* let n;
do {
  n = Number(prompt("Digite um numero: "));
} while(n >= 0); */


