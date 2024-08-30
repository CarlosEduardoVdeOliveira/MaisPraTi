/*
15. Escreva um programa que gera e imprime os primeiros 10 números da 
sequência de Fibonacci utilizando um loop for.
*/
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(10).join(", "));