// MÉDIA ENTRE 3 NÚMEROS
let num1 = 10;
let num2 = 20;
let num3 = 30;

let average = (num1 + num2 + num3) / 3;

function average(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
}


console.log(average(10, 20, 30));

//============================================

//NOME COMPLETO
let firstName = 'Jack';
let lastName = 'Sparrow';


function fullName(firstName, lastName){
  return (firstName + ' ' + lastName);
}

console.log(fullName('Jack', 'kosoajsa'));

//============================================
//GERAR UM ARRAY COM 100 CARACTERES IGUAIS
function generateArray(character, num){
  let characterArray = [];
  for(let index = 0; index < num; index += 1){
    characterArray.push(character);
  }
  return characterArray;
}

console.log(generateArray('*', 10));
console.log(generateArray(0, 100000));
