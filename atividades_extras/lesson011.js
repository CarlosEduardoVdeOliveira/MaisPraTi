/* const prompt = require("prompt-sync")();
let arrayNumbers = [5,7,9,5, 8, 0.5];

// 1. Soma dos Elementos de um Array
let sumOfArrayElements = (array) =>{
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum;
}
console.log(sumOfArrayElements(arrayNumbers));

//2. Encontre o Maior Número em um Array
let findHigherNumberInArray = (array) => {
  let maxNumber = arrayNumbers[0];
  for (let item of array) {
    if (item > maxNumber) {
      maxNumber = item;
    }
  }
  return (maxNumber);
}
console.log(findHigherNumberInArray(arrayNumbers));
;
//3. Reverter um Array
let reversedArray = (array)  =>{
  let reversed = []
  for (let i = array.length -1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed;
}
console.log(reversedArray(arrayNumbers));

//4. Criem um novo array contendo apenas os números pares
let isEven = (array)  =>{
  let newArrayIsEven = []
  for (const item of array) {
    if(item % 2 === 0){
      newArrayIsEven.push(item);
    }
  }
  return newArrayIsEven;
}
console.log(isEven(arrayNumbers));

//5. Contar Ocorrências de um Valor
let countOccurrencesOfAValue = (value, array)  =>{
  let counter = 0;
  for (let item of array) {
    if (value === item) counter++;
  }
  return counter;
}
let number = Number(prompt("Digite o numero: "))
let counter = countOccurrencesOfAValue(number, arrayNumbers)
console.log(`O valor ${number} ocorre ${counter} vez(es) no vetor `); */

/* let nome = "Carlos    Eduardo"
console.log(nome.substring(7));
console.log(nome.substring(7).trim()); */
//console.log(Math.round(Math.random() * 10));

let str = "Carlos Eduardo"
//Inverter uma string
function invertString(str) {
  let reversedStr = ""
  for (let i = str.length -1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
//console.log(invertString(str));

//Contar vogais
function countVowels(str){
  let vowels = "aeiou"
  let lowerStr = str.toLowerCase();
  let counter = 0;
  for (let i = 0; i < lowerStr.length; i++) {
      if (str.includes(vowels)) {
        counter++;
      }
  }
  return counter
}
//console.log(countVowels(str));

//Gerar número aleatório
function myRandom() {
  return Math.round(Math.random() * 10)
}
//console.log(myRandom());

//Dias entre duas datas

//Formatar data


/* var kidsWithCandies = function(candies, extraCandies) {
  let result = []
  let max = Math.max(...candies);
  for(let c =0; c < candies.length; c++){
    if(candies[c] + extraCandies >= max){
        result.push(true)
    }else{
        result.push(false)
    }
  }
  return result
};

console.log(kidsWithCandies([1,12,1,12], 2));//[ false, true, false, true ]
console.log(kidsWithCandies([12,1,12], 2));//[true, false, true]
console.log(kidsWithCandies([12,12,1], 2));//[true, true, false]
console.log(kidsWithCandies([4,2,1,1,2], 1));//[true,false,false,false,false]
console.log(kidsWithCandies([2,3,5,1,3], 3));//[true,true,true,false,true] */
