function greet(name){
  // console.log('hey, ' + name + ' tudo bem?');
}

greet('Samanta');
greet('Luis');

//SOMA
function sum(num1, num2){
  return num1 + num2;
}

// console.log(sum(10, 20));
// console.log(sum(50, 200));

//MAIOR VALOR
function biggest(firstNumber, secondNumber){
  if(firstNumber > secondNumber){
    return 'O maior valor é: ' + firstNumber;
  } else if(firstNumber === secondNumber){
    return 'Empate';
  } else {
    return 'O maior valor é: ' + secondNumber;
  }
}

console.log(biggest(10, 5));
console.log(biggest(10, 10));
console.log(biggest(10, 20));